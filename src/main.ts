import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import registerApp from './global'
import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App).use(router).use(store)
app.use(registerApp)
app.mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_TIME_OUT)
