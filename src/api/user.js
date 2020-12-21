import fetch from './fetch'
export default {
    userInfo (params) {
        return fetch.get('/user/loggedInUserInfo', params)
    },
    userDetails (params) {
        return fetch.get('/user/getUserDetails', params)
    },
    changePassword (params) {
        return fetch.post('/user/settings/changePassword', params)
    },
    updateProfile (params) {
        return fetch.post('/user/settings', params)
    }
}
