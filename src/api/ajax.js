/* 对axios二次封装 */
import axios from 'axios'
import NProgress from 'nprogress'
import { Message } from 'element-ui'
import store from '@/store'
// import "nprogress/nprogress.css";
import 'nprogress/nprogress.css'
//创建一个axios实例
const service = axios.create({
  baseURL: '/api',
  timeout: 2000,
})
// 设置拦截器
//请求发送前拦截器
service.interceptors.request.use((config) => {
  NProgress.start()
  config.headers.userTempId = store.state.user.userTempId
  let token = store.state.user.token
  if (token) {
    config.headers.token = token
  }
  return config
})

//响应拦截器
service.interceptors.response.use(
  (response) => {
    NProgress.done()
    return response.data || response
  },
  (error) => {
    NProgress.done()
    Message.error(error.message || '未知错误')
    return Promise.reject(error)
  }
)

export default service
