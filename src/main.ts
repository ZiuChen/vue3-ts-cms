import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
import registerApp from './global'
import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App).use(store).use(registerApp)
setupStore()
app.use(router)
app.mount('#app')
