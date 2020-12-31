<template>
    <el-container class="main" id="main">
        <common-sidebar/>
        <el-container>
            <el-main>
                <div class="main-overview-row">
                    <overview-card title="Temperature" value="27" extra-description="℃"/>
                    <overview-card title="Status" value="Running"/>
                    <overview-card title="Running Time" value="32hr3min"/>
                    <overview-card title="Devices" value="3"/>
                </div>
                <div>
                    <p>所有设备</p>
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

export default {
    name: 'Main',
    components: {
        CommonHeader, CommonSidebar, OverviewCard
    },
    data () {
        return {
            CurrentTab: 'Glance'
        }
    },

    methods: {
        changeTab () {

        }
    }
}
</script>

<style lang="less" scoped>
.main-row{
    display: flex;
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
