<template>
    <el-aside id="common-sidebar" width="none">
        <div class="sidebar-logo-block">
            <span class="sidebar-logo">Oblivion</span>
        </div>
        <el-menu :default-active="menuActiveIndex" class="common-sidebar-menu" @select="handleSelect">
            <el-menu-item index="home">Home</el-menu-item>
            <el-menu-item index="settings">Settings</el-menu-item>
            <el-menu-item index="logout">Log Out</el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Sidebar',
    data () {
        return {
            menuActiveIndex: this.$route.meta.headerMenuIndex
        }
    },
    methods: {
        handleSelect () {

        }
    },
    mounted () {
        console.log(this.userInfo)
    },
    computed: {
        ...mapState({
            userInfo: (state) => state.auth.userInfo
        })
    }
}
</script>

<style lang="less" scoped>
    #common-sidebar{
        background-color: #fff;
        height: 100%;
        width: 340px;
        box-shadow: 0 0 25PX #0000002b;
    }
    .sidebar-logo-block{
        display: flex;
        height: 130px;

        .sidebar-logo{
            font-size: 35px;
            font-weight: 700;
            display: block;
            text-align: center;
            margin: auto;
        }
    }
    .common-sidebar-menu{
        border: none;

        li.el-menu-item{
            padding-left: 20px;
            text-align: center;
            font-size: 24px;
            width: 80%;
            margin: 15px 32px;
            line-height: 45PX;
            height: 45PX;
            color: #606060;
            border-radius: 8PX;

            &.is-active{
                color: #fff;
                background-color: #4887F3;
                box-shadow: 0 0 25PX #0000002b;
            }
        }
    }
</style>
