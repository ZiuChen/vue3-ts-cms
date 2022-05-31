import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import registerApp from './global'
import zuRequest from './service'

const app = createApp(App).use(router).use(store)
app.use(registerApp)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_TIME_OUT)

zuRequest.request({
  url: '/home/multidata',
  method: 'GET',
  showLoading: true,
  interceptors: {
    requestInterceptor: (cfg) => {
      console.log('[局部]请求成功拦截')
      return cfg
    },
    responseInterceptor: (res) => {
      console.log('[局部]响应成功拦截')
      return res
    }
  }
})
