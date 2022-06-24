import { useStore } from '@/store'

export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const vPermission = ['system', pageName, handleName].join(':')
  return !!permissions.find((item) => item === vPermission)
}
