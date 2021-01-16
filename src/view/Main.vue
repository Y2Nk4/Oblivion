<template>
    <el-container class="main" id="main" v-loading.fullscreen.lock="isPageLoading">
        <common-sidebar/>
        <el-container>
            <el-main>
                <div class="main-overview-row">
                    <overview-card title="Temperature" value="27" extra-description="℃"/>
                    <overview-card title="Status" value="Running"/>
                    <overview-card title="Running Time" value="32hr3min"/>
                    <overview-card title="Devices" :value="allDevices.length"/>
                </div>
                <div>
                    <p>All Devices</p>
                    <el-table
                        :data="allDevices"
                        border
                        style="width: 100%">
                        <el-table-column
                            prop="_id"
                            label="Device ID"
                            width="140px">
                        </el-table-column>
                        <el-table-column
                            prop="device_name"
                            label="Device Name">
                        </el-table-column>
                        <el-table-column
                            prop="device_mac"
                            label="Device Mac Address">
                        </el-table-column>
                        <el-table-column
                            prop="device_type"
                            label="Device Type">
                        </el-table-column>
                        <el-table-column
                            label="Description">
                            <template slot-scope="scope">
                                <el-button type="text" @click="showEditDeviceDescription(scope.row)">{{ scope.row.description || 'Not Specified' }}</el-button>
                            </template>
                        </el-table-column>
                        <el-table-column
                            label="Status">
                            <template slot-scope="scope">
                                <el-tooltip class="item" effect="dark" :content="`Last Reported at: ${new Date(scope.row.last_received).toTimeString()}`" placement="top">
                                    <el-tag type="success" v-if="scope.row.is_active">Normal</el-tag>
                                    <el-tag type="warning" v-else>Not Active</el-tag>
                                </el-tooltip>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>

                <div>
                    <p></p>
                    <v-chart :options="temperatureGraphOptions" ref="temperatureGraph" autoresize/>
                </div>

                <div>
                    <p></p>
                    <v-chart :options="humidityGraphOptions" ref="humidityGraph" autoresize/>
                </div>
                <!--<div><p>我是一段主要文字</p></div>-->
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import '../assets/less/main.less'
import CommonHeader from '@/components/Common/Header'
import CommonSidebar from '@/components/Common/Sidebar'
import OverviewCard from '@/components/Cards/OverviewCard'
import {mapActions} from 'vuex'

export default {
    name: 'Main',
    components: {
        CommonHeader, CommonSidebar, OverviewCard
    },
    data () {
        return {
            CurrentTab: 'Glance',
            allDevices: [],
            mappedAllDevices: {},
            isPageLoading: false,
            temperatureGraphOptions: {
                title: {
                    text: 'Temperature Graph'
                },
                xAxis: {
                    type: 'time',
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%'],
                    splitLine: {
                        show: false
                    }
                },
                legend: {
                    show: true,
                    top: '0px'
                },
                dataZoom: [
                    {
                        show: true,
                        realtime: true,
                        start: 65,
                        end: 100
                    }
                ],
                grid: {
                    bottom: '80px'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        animation: false
                    },
                    formatter: function (component) {
                        let date = component[0].value[0]
                        return `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}<br><br>` +
                            component.map(item => `<span style="color: ${item.color}">${item.seriesName}</span> : ${item.value[1]} ℃`).join('<br>')
                    }
                },
                series: [],
                paginate: {
                    page: 1,
                    count: 5000,
                    type: 1
                }
            },
            humidityGraphOptions: {
                title: {
                    text: 'Humidity Graph'
                },
                xAxis: {
                    type: 'time',
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%'],
                    splitLine: {
                        show: false
                    }
                },
                legend: {
                    show: true,
                    top: '0px'
                },
                dataZoom: [
                    {
                        show: true,
                        realtime: true,
                        start: 65,
                        end: 100
                    }
                ],
                grid: {
                    bottom: '80px'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        animation: false
                    },
                    formatter: function (component) {
                        let date = component[0].value[0]
                        return `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}<br><br>` +
                            component.map(item => `<span style="color: ${item.color}">${item.seriesName}</span> : ${item.value[1]} %`).join('<br>')
                    }
                },
                series: [],
                paginate: {
                    page: 1,
                    count: 5000,
                    type: 2
                }
            }
        }
    },

    methods: {
        ...mapActions({
            fetchAllDevices: 'device/getAllDevices',
            editDeviceDescription: 'device/editDeviceDescription',
            readSensorData: 'sensorData/readSensorData'
        }),
        changeTab () {

        },
        async showEditDeviceDescription (row) {
            this.$prompt(null, 'Input the description', {
                confirmButtonText: 'yes',
                cancelButtonText: 'cancel',
                inputValue: row.description
            }).then(async ({ value }) => {
                this.isPageLoading = true
                await this.editDeviceDescription({
                    deviceId: row._id,
                    description: value
                })
                await this.loadAllDevices()
                this.isPageLoading = false

                this.$message({
                    type: 'success',
                    message: 'Updated description'
                })
            }).catch(() => {})
        },
        async loadAllDevices () {
            this.allDevices = await this.fetchAllDevices()
        },
        async loadTemperatureData () {
            let graph = this.$refs.temperatureGraph
            graph.showLoading({
                text: 'Loading…',
                color: '#4ea397',
                maskColor: 'rgba(255, 255, 255, 0.4)'
            })
            let temperatureData = await this.readSensorData(this.temperatureGraphOptions.paginate)
            graph.hideLoading()
            this.temperatureGraphOptions.paginate.page = temperatureData.paginate.page + 1

            Object.keys(temperatureData.data).forEach((deviceId) => {
                let device = temperatureData.devices[deviceId]
                // each device
                if (this.temperatureGraphOptions.series.filter(series => series.deviceId === deviceId).length === 0) {
                    this.temperatureGraphOptions.series.push({
                        name: `传感器 ${device && device.description ? device.description : deviceId}`,
                        type: 'line',
                        showSymbol: false,
                        deviceId,
                        data: this.processData(temperatureData.data[deviceId].data)
                    })
                } else {
                    this.temperatureGraphOptions.series.forEach(series => {
                        if (series.deviceId === deviceId) {
                            series.data = series.concat(this.processData(temperatureData.data[deviceId].data))
                        }
                    })
                }
            })
            graph.setOptions(this.temperatureGraphOptions)
        },
        async loadHumidityGraphData () {
            let graph = this.$refs.humidityGraph
            graph.showLoading({
                text: 'Loading…',
                color: '#4ea397',
                maskColor: 'rgba(255, 255, 255, 0.4)'
            })
            let humidityData = await this.readSensorData(this.humidityGraphOptions.paginate)
            graph.hideLoading()
            this.humidityGraphOptions.paginate.page = humidityData.paginate.page + 1

            Object.keys(humidityData.data).forEach((deviceId) => {
                let device = humidityData.devices[deviceId]
                // each device
                if (this.humidityGraphOptions.series.filter(series => series.deviceId === deviceId).length === 0) {
                    this.humidityGraphOptions.series.push({
                        name: `传感器 ${device && device.description ? device.description : deviceId}`,
                        type: 'line',
                        showSymbol: false,
                        deviceId,
                        data: this.processData(humidityData.data[deviceId].data)
                    })
                } else {
                    this.humidityGraphOptions.series.forEach(series => {
                        if (series.deviceId === deviceId) {
                            series.data = series.concat(this.processData(humidityData.data[deviceId].data))
                        }
                    })
                }
            })
            graph.setOptions(this.humidityGraphOptions)
        },
        processData (rawData) {
            return rawData.map((row) => {
                return {
                    name: row.store_at,
                    value: [
                        new Date(Math.round(new Date(row.store_at).getTime() / 1000) * 1000),
                        Math.round(row.value * 1000) / 1000
                    ]
                }
            })
        }
    },

    async mounted () {
        this.loadAllDevices()
        this.loadTemperatureData()
        this.loadHumidityGraphData()
    }
}
</script>

<style lang="less" scoped>
.main-row{
    display: flex;
}
.echarts {
    width: 100%;
}
.main-overview-row{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    position: relative;
    justify-content: flex-start;

    .overview-card{
        margin: 10px;
    }
}
</style>
