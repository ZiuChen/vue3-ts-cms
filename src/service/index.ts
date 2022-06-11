import zuRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

export default new zuRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      // console.log('请求成功拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log('请求失败拦截')
      return err
    },
    responseInterceptor: (config) => {
      // console.log('响应成功拦截')
      return config
    },
    responseInterceptorCatch: (err) => {
      // console.log('响应失败拦截')
      return err
    }
  }
})
