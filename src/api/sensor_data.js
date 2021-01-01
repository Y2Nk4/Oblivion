import fetch from './fetch'
export default {
    // 用户登录
    readSensorData (params) {
        return fetch.get('/sensorData/readSensorData', params)
    }
}
