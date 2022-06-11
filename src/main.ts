import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
import registerApp from './global'
import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App).use(router).use(store)
setupStore()
app.use(registerApp)
app.mount('#app')
