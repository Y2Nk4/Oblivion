import device from '../../api/device'
const state = {
}
const mutations = {
}
const actions = {
    async getAllDevices ({ state, commit }, params) {
        let res = await device.getAllDevices(params)
        return res.data.data
    },
    async editDeviceDescription ({ state, commit }, { deviceId, description }) {
        let res = await device.editDeviceDescription({
            deviceId, description
        })
        return res.data.data
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
