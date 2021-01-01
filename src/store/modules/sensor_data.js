import sensorData from '../../api/sensor_data'
const state = {
}
const mutations = {
}
const actions = {
    async readSensorData ({ state, commit }, params) {
        let res = await sensorData.readSensorData(params)
        return res.data.data
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
