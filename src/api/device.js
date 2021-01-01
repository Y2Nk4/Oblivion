import fetch from './fetch'
export default {
    // 用户登录
    getAllDevices (params) {
        return fetch.get('/device/getAllDevices', params)
    }
}
