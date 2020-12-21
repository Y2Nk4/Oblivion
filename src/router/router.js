import VueRouter from 'vue-router'
import Main from '../view/Main'
import Login from '../view/Login'
import store from '../store'
import Vue from 'vue'
// import Vue from 'vue'

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: Main,
            meta: {
                headerMenuIndex: 'home'
            }
        },
        {
            path: '/login',
            component: Login,
            meta: {
                noAuth: true
            }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

router.beforeEach(async (to, form, next) => {
    const TOKEN = localStorage.getItem('LOGIN_STATE')
    if (TOKEN === 'SUCCESS') {
        // 用户已登录 认证->放行->获取用户信息
        next()
    } else {
        if (to.meta.noAuth) {
            await store.dispatch('checkIfLoggedIn')
            next()
        } else {
            Vue.prototype.$message.error('Please Login First')
            setTimeout(() => {
                next('/login')
            }, 1500)
        }
    }
})

export default router
