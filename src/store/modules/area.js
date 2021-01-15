import area from '../../api/area'
const state = {
}
const mutations = {
}
const actions = {
    async fetchAllAreas ({ state, commit }, params) {
        let res = await area.fetchAllAreas(params)
        return res.data.data
    },
    async editArea ({ state, commit }, { areaId, updateFields }) {
        console.log('areaid', areaId)
        console.log('updateFields', updateFields)
        let res = await area.editArea(Object.assign(updateFields, {
            areaId
        }))
        return res.data.data
    },
    async editDataSource ({ state, commit }, { dataId, deviceId }) {
        let res = await area.editDataSource({ dataId, deviceId })
        return res.data.data
    },
    async addArea ({ state, commit }, fields) {
        let res = await area.addArea(fields)
        return res.data.data
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
