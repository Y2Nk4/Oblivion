import fetch from './fetch'
export default {
    // 用户登录
    fetchAllAreas (params) {
        return fetch.get('/area/getAllAreas', params)
    },
    editArea (data) {
        return fetch.post('/area/editArea', data)
    },
    addArea (data) {
        return fetch.post('/area/addArea', data)
    },
    editDataSource (data) {
        return fetch.post('/area/editDataSource', data)
    }
}
