// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router/router'
import VueRouter from 'vue-router'
import less from 'less'
import store from './store/index'
import { setRemInit } from '@/utils/rem'

/* Element UI */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

/* Vue-Echarts */
import ECharts from 'vue-echarts'
import 'echarts-gl'

setRemInit()

Vue.prototype.$http = axios // 类似于vue-resource的调用方法

// Vue.use(Antd) // to use Antd Vue
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.component('v-chart', ECharts)
Vue.use(less)

/* eslint-disable no-new */
new Vue({
    store,
    router: router,
    render: h => h(App),
    async created () {
        // 每次刷新页面都检查是否登录
        if (localStorage.getItem('LOGIN_STATE') === 'SUCCESS') {
            console.log('requesting')
            await store.dispatch('user/getUserInfo')
            console.log('requested')
        }
    }
}).$mount('#app')
