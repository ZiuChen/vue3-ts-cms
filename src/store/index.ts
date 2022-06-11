import { createStore } from 'vuex'
import login from './login/login'
import type { IRootState } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'Ziu'
    }
  },
  modules: {
    login
  }
})

export default store
