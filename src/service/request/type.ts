import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ZUinterceptors {
  requestInterceptor?: (res: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}

export interface ZURequestConfig extends AxiosRequestConfig {
  interceptors?: ZUinterceptors
  showLoading?: boolean
}
