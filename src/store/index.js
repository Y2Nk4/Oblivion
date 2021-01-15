import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import user from './modules/user'
import device from './modules/device'
import area from './modules/area'
import sensorData from './modules/sensor_data'
import dataType from './modules/data_type'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: { auth, user, device, sensorData, area, dataType }
})
