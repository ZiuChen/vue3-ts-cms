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

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
