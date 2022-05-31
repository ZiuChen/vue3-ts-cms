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
  }
  request(config: ZURequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
      return res
    })
  }
}
