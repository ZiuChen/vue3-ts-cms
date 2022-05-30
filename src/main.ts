import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import registerApp from './global'

const app = createApp(App).use(router).use(store)
registerApp(app)
app.mount('#app')
