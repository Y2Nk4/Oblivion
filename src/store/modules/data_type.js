import dataType from '../../api/data_type'
const state = {
}
const mutations = {
}
const actions = {
    async getAllDataTypes ({ state, commit }, params) {
        let res = await dataType.getAllDataTypes(params)
        return res.data.data
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
