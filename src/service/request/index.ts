import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface ZUinterceptors {
  requestInterceptor?: (res: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}

interface ZURequestConfig extends AxiosRequestConfig {
  interceptors?: ZUinterceptors
}

export default class ZURequest {
  instance: AxiosInstance
  interceptors?: ZUinterceptors
  constructor(config: ZURequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    this.instance.interceptors.request.use(
      (config) => {
        console.log('[全局]请求成功拦截')
        return config
      },
      (err) => {
        console.log('[全局]请求失败拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (config) => {
        console.log('[全局]响应成功拦截')
        return config
      },
      (err) => {
        console.log('[全局]响应失败拦截')
        return err
      }
    )
  }
  request(config: ZURequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors?.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors?.responseInterceptor(res)
      }
      return res
    })
  }
}
