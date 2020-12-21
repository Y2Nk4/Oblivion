<template>
    <div id="common-header">
        <el-menu :default-active="menuActiveIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item><span>Oblivion</span></el-menu-item>
            <el-menu-item index="home">Home</el-menu-item>
            <el-menu-item style="float: right">
                <el-popover
                    popper-class="header-menu-popover"
                    placement="bottom"
                    trigger="hover"
                    :open-delay="200"
                    :close-delay="500">
                    <img :src="userInfo.avatar" alt="" class="header-avatar" slot="reference">
                    <div>
                        <div class="header-menu-title"><span>Hi! </span><span class="header-username">{{ userInfo.nickname }}</span></div>
                        <el-divider />
                        <ul>
                            <li><router-link :to="{ name: 'UserHome', params: { id: userInfo.id } }"><span>Profile</span></router-link></li>
                        </ul>
                    </div>
                </el-popover>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Header',
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
img.header-avatar{
    height: 42px;
    border-radius: 100px;
}
span.header-user-nickname{
    padding: 0 0.7em;
}
</style>

<style lang="less">
// .header-menu-popover 在scoped里定义会出问题
.el-popover.header-menu-popover{
    padding: 12px 0;

    .el-divider{
        margin: 16px 0;
    }
    div.header-menu-title{
        padding-left: 20px;
        margin: 10px 0;
    }
    span.header-username{
        display: inline-block;
        font-size: 120%;
        font-weight: bold;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li{
            padding: 10px 20px;
            transition: background 0.3s ease-in-out;

            &:hover{
                background: #ffebbb;
            }
            a{
                display: block;
                text-decoration: none;
                color: #707070;
            }
        }
    }
}
</style>
