<template>
    <el-container class="main" id="main">
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
                            prop="deviceId"
                            label="Device ID"
                            width="100px">
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
            }
        }
    },

    methods: {
        ...mapActions({
            fetchAllDevices: 'device/getAllDevices',
            readSensorData: 'sensorData/readSensorData'
        }),
        changeTab () {

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
                // each device
                if (this.temperatureGraphOptions.series.filter(series => series.deviceId === deviceId).length === 0) {
                    this.temperatureGraphOptions.series.push({
                        name: `传感器 ${deviceId}`,
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
