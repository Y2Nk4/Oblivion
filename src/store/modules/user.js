import user from '../../api/user'
const state = {
    userInfo: '',
    userDetails: ''
}
const mutations = {
    SET_USER_INFO (state, data) {
        state.userInfo = data
    },
    SET_USER_DETAILS (state, data) {
        state.userDetails = data
    }
}
const actions = {
    async getUserInfo ({ state, commit }, params) {
        let res = await user.userInfo(params)
        commit('SET_USER_INFO', res.data.data)
        return res.data.data
    },
    async getUserDetails ({ state, commit }, params) {
        let res = await user.userDetails(params)
        commit('SET_USER_DETAILS', res.data.data)
    },
    async changePasswords ({ state, commit }, params) {
        return user.changePassword(params)
    },
    async updateProfile ({ state, commit }, params) {
        return user.updateProfile(params)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
