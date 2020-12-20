import fetch from './fetch'
export default {
    // 用户登录
    login (params) {
        return fetch.post('/auth/login', params)
    },
    // 用户注册
    register (params) {
        return fetch.post('/auth/register', params)
    },
    // 用户注册
    checkIfLoggedIn (params) {
        return fetch.post('/auth/checkIfLoggedIn', params)
    }
}
