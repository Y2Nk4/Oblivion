import device from '../../api/device'
const state = {
}
const mutations = {
}
const actions = {
    async getAllDevices ({ state, commit }, params) {
        let res = await device.userInfo(params)
        return res.data.data
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
