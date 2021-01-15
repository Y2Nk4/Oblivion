<template>
    <el-container class="main" id="area_main">
        <common-sidebar />
        <el-container>
            <el-main>
                <div>
                    <p>All Area</p>
                    <el-button icon="el-icon-plus" circle @click="showAddAreaDialog"></el-button>
                    <el-table
                        :data="allAreas"
                        border
                        style="width: 100%">
                        <el-table-column
                            prop="_id"
                            label="ID"
                            width="70px">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="Area Name"
                            width="170px">
                        </el-table-column>
                        <el-table-column
                            prop="description"
                            label="Description">
                        </el-table-column>
                        <el-table-column label="Data & Data Source">
                            <template slot-scope="scope">
                                <el-button type="text" @click="showDataFields(scope.row)">{{scope.row.data.length}} fields</el-button>
                            </template>
                        </el-table-column>
                        <el-table-column label="Control">
                            <template slot-scope="scope">
                                <el-button
                                    size="mini"
                                    @click="showEditAreaDialog(scope.row)">编辑</el-button>
                                <el-popconfirm
                                    confirm-button-text='yes'
                                    cancel-button-text='cancel'
                                    title="Are you sure you want to delete this?">
                                    <el-button
                                        size="mini"
                                        type="danger"
                                        slot="reference"
                                        @click="deleteArea(scope.row)">删除</el-button>
                                </el-popconfirm>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-main>
        </el-container>

        <el-dialog title="Edit Area" :visible.sync="editAreaDialogFormVisible" v-loading="isFormLoading">
            <el-form :model="editAreaDialogForm">
                <el-form-item label="Area Name">
                    <el-input v-model="editAreaDialogForm.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Area Description">
                    <el-input v-model="editAreaDialogForm.description" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editAreaDialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleEditArea">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog title="Add Area" :visible.sync="addAreaDialogFormVisible" v-loading="isFormLoading">
            <el-form :model="addAreaDialogForm">
                <el-form-item label="Area Name">
                    <el-input v-model="addAreaDialogForm.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Area Description">
                    <el-input v-model="addAreaDialogForm.description" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addAreaDialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleAddArea">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog title="Data & Data Srouce" :visible.sync="dataSourceDialogFormVisible" v-loading="isFormLoading">
            <el-table
                :data="editAreaDialogForm.data"
                border
                style="width: 100%">
                <el-table-column
                    key="0"
                    width="35px">
                    <template slot-scope="scope">
                        <span style="text-align: center; display: block">{{ scope.$index }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    key="1"
                    label="Current Data"
                    width="120px">
                    <template slot-scope="scope">
                        {{ scope.row.data }} {{ scope.row.type && dataTypes && dataTypes[scope.row.type] ? (dataTypes[scope.row.type]).unit : null }}
                    </template>
                </el-table-column>
                <el-table-column
                    key="2"
                    label="Type">
                    <template slot-scope="scope">
                        {{ scope.row.type && dataTypes && dataTypes[scope.row.type] ? (dataTypes[scope.row.type]).type_name : null }}
                    </template>
                </el-table-column>
                <el-table-column
                    key="3"
                    label="Source">
                    <template slot-scope="scope">
                        <el-button type="text" @click="showEditDataSource(scope)" v-if="!scope.row.showDeviceList">{{ scope.row.source.device_name }}</el-button>
                        <el-cascader
                            v-else
                            :options="deviceListForCascader"
                            :show-all-levels="false"
                            v-model="cascaderSelectedDevice"
                            @change="(val) => { changeSelectedDevice(val, scope) }">
                             <template slot-scope="{ node, data }">
                                <span>{{ data.label }}</span>
                                <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
                            </template>
                        </el-cascader>
                    </template>
                </el-table-column>
            </el-table>

            <div slot="footer" class="dialog-footer">
                <el-button @click="dataSourceDialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleAddArea">确 定</el-button>
            </div>
        </el-dialog>
    </el-container>
</template>

<script>
import CommonSidebar from '@/components/Common/Sidebar'
import { mapActions } from 'vuex'
import _ from 'lodash'

export default {
    name: 'AreaMain',
    components: {
        CommonSidebar
    },
    data () {
        return {
            allAreas: [],
            deviceListForCascader: [],
            editAreaDialogFormVisible: false,
            addAreaDialogFormVisible: false,
            dataSourceDialogFormVisible: false,
            isFormLoading: false,
            editAreaDialogForm: {},
            addAreaDialogForm: {},
            dataTypes: {},
            cascaderSelectedDevice: null
        }
    },
    methods: {
        ...mapActions({
            fetchAllDevices: 'device/getAllDevices',
            getAllDataTypes: 'dataType/getAllDataTypes',
            fetchAllAreas: 'area/fetchAllAreas',
            editDataSource: 'area/editDataSource',
            editArea: 'area/editArea',
            addArea: 'area/addArea'
        }),

        async changeSelectedDevice (val, scope) {
            console.log(val, scope)
            this.isPageLoading = true
            try {
                await this.editDataSource({
                    dataId: scope.row._id,
                    deviceId: val.pop()
                })
                this.$message({
                    type: 'success',
                    message: 'Updated Data Source'
                })
                this.allAreas = await this.fetchAllAreas()
                this.allAreas.forEach(area => {
                    if (area._id === this.editAreaDialogForm._id) {
                        this.editAreaDialogForm = area
                    }
                })
                this.$set(this.editAreaDialogForm.data, scope.$index, Object.assign(
                    this.editAreaDialogForm.data[scope.$index], {
                        showDeviceList: false
                    }
                ))
                this.isPageLoading = true
            } catch (e) {
                this.allAreas = await this.fetchAllAreas()
                this.isPageLoading = false
                console.log(e)
            }
        },

        async showEditDataSource (scope) {
            this.cascaderSelectedDevice = scope.row.source.device_name
            this.$set(this.editAreaDialogForm.data, scope.$index, Object.assign(
                this.editAreaDialogForm.data[scope.$index], {
                    showDeviceList: true
                }
            ))
            console.log(scope)
        },

        async showDataFields (row) {
            this.editAreaDialogForm = row
            this.dataSourceDialogFormVisible = true
        },

        async showEditAreaDialog (area) {
            this.editAreaDialogForm = area
            this.editAreaDialogFormVisible = true
        },
        async deleteArea (area) {

        },
        showAddAreaDialog () {
            this.addAreaDialogFormVisible = true
        },
        async handleEditArea () {
            this.isFormLoading = true
            console.log('editAreaDialogForm', this.editAreaDialogForm)
            await this.editArea({
                areaId: this.editAreaDialogForm._id,
                updateFields: this.editAreaDialogForm
            })
            this.allAreas = await this.fetchAllAreas()
            this.isFormLoading = false
            this.editAreaDialogFormVisible = false
        },
        async handleAddArea () {
            this.isFormLoading = true
            await this.addArea(this.addAreaDialogForm)
            this.allAreas = await this.fetchAllAreas()
            this.isFormLoading = false
            this.addAreaDialogFormVisible = false
        },
        async loadDeviceListForCascader () {
            let devices = await this.fetchAllDevices()
            this.deviceListForCascader = _(devices).groupBy('device_type').mapValues((v, k) => {
                console.log(k, v)
                return {
                    value: k,
                    label: k,
                    children: v.map((device) => {
                        return {
                            value: device._id,
                            label: device.device_name
                        }
                    })
                }
            }).values().value()
        }
    },
    async mounted () {
        this.allAreas = await this.fetchAllAreas()
        let dataTypeLists = await this.getAllDataTypes()
        this.loadDeviceListForCascader()
        dataTypeLists.forEach(type => {
            this.dataTypes[type.type_id] = type
        })
    }
}
</script>

<style scoped>

</style>
