import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import appConfig from '../config/app.config.js'

// 全局请求地址&响应拦截器
axios.defaults.baseURL = appConfig.fetch_base_url

// 请求拦截器
// 新版使用session，不需要添加 Authorization
/* axios.interceptors.request.use(function(config) {
  // 发起请求前获取令牌给后端
  const token = localStorage.getItem('TOKEN' )
  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`
  }
  return config
}) */

// axios.defaults.withCredentials = true

// 响应拦截器
axios.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        const { response = {} } = error
        // console.log(response)
        if (response.status === 400) {
            Vue.prototype.$message.error(
                `error: ${response.status}! ${response.data.error}`
            )
        } else if (response.status === 401) {
            Vue.prototype.$message.error(
                `error: ${response.status}! ${response.data.error.error}`
            )
            localStorage.removeItem('LOGIN_STATE')
            // TODOLIST:进行路由跳转
        } else if (response.status === 403) {
            Vue.prototype.$message.error(
                `error: ${response.status}! ${response.data.data}`
            )
            localStorage.removeItem('LOGIN_STATE')
            this.$router.push('/login')
        } else if (response.status === 404) {
            Vue.prototype.$message.error(
                `error: ${response.status}! ${response.data.error}`
            )
        } else if (response.status >= 500) {
            Vue.prototype.$message.error(
                `error: ${response.status}!`
            )
        }
        return new Promise(() => {})
    }
)

// 封装请求
export default {
    get (url, params = {}) {
        return axios({
            method: 'get',
            url,
            params,
            paramsSerializer: (query) => qs.stringify(query)
        })
    },
    post (url, params) {
        return axios({
            method: 'post',
            url,
            data: qs.stringify(params)
        })
    },
    put (url, params = {}) {
        return axios({
            method: 'put',
            url,
            data: qs.stringify(params)
        })
    },
    delete (url, params = {}) {
        return axios({
            method: 'delete',
            url,
            params
        })
    }
}
