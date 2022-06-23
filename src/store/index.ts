import { createStore, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import system from './main/system/system'
import product from './main/product/product'
import type { Store } from 'vuex'
import type { IRootState, IStoreType } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'Ziu'
    }
  },
  modules: {
    login,
    system,
    product
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
