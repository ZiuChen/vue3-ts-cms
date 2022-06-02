import axios, { AxiosInstance } from 'axios'
import { ElLoading } from 'element-plus/lib/components'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
import { ZUinterceptors, ZURequestConfig } from './type'

const DEFAULT_LOADING = false
export default class ZURequest {
  instance: AxiosInstance
  interceptors?: ZUinterceptors
  showLoading: boolean
  loading?: LoadingInstance
  constructor(config: ZURequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = DEFAULT_LOADING
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
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        console.log('[全局]请求成功拦截')
        return config
      },
      (err) => {
        console.log('[全局]请求失败拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // 响应成功, 但是服务器返回错误码
        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败')
        } else {
          console.log('请求成功')
        }
        this.loading?.close()
        console.log('[全局]响应成功拦截')
        return data
      },
      (err) => {
        // 响应失败
        if (err.response.status === 404) {
          console.log('404 Error')
        }
        this.loading?.close()
        console.log('[全局]响应失败拦截')
        return err
      }
    )
  }
  request<T>(config: ZURequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors?.requestInterceptor(config)
      }
      this.showLoading =
        config.showLoading !== undefined ? config.showLoading : DEFAULT_LOADING
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors?.responseInterceptor(res)
          }
          this.showLoading = DEFAULT_LOADING
          return res
        })
        .then((res) => resolve(res))
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }
  get<T>(config: ZURequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: ZURequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: ZURequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: ZURequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
