import auth from '../../api/auth'
// import Vue from 'vue'
const state = {
    jwtToken: '',
    userInfo: {}
}
const mutations = {
    SET_JWT_TOKEN (state, data) {
        state.jwtToken = data
        if (data.data) {
            localStorage.setItem('TOKEN', data.data)
        }
    },
    SET_USER_INFO (state, data) {
        state.userInfo = data.data
    },
    SET_LOGIN_STATE (state, data) {
        localStorage.setItem('LOGIN_STATE', 'SUCCESS')
    }
}
const actions = {
    async authLogin ({ state, commit }, params) {
        let res = await auth.login(params)
        commit('SET_LOGIN_STATE')
        commit('SET_USER_INFO', res.data)
    },
    async authRegister ({ state, commit }, params) {
        let res = await auth.register(params)
        commit('SET_LOGIN_STATE')
        commit('SET_USER_INFO', res.data)
    },
    async checkIfLoggedIn ({ state, commit }, params) {
        let res = await auth.checkIfLoggedIn(params)
        commit('SET_LOGIN_STATE')
        commit('SET_USER_INFO', res.data)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
