import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ZUinterceptors<T = AxiosResponse> {
  requestInterceptor?: (res: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

export interface ZURequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ZUinterceptors<T>
  showLoading?: boolean
}
