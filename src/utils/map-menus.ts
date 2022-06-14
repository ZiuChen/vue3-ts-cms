import type { IUserMenus, ISubMenus } from '@/service/login/type'
import type { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenus: IUserMenus) {
  const loadRoutes: RouteRecordRaw[] = []
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  const _recurseGetRoute = (userMenus: IUserMenus | ISubMenus) => {
    userMenus.forEach((menu: any) => {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) loadRoutes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    })
  }
  _recurseGetRoute(userMenus)
  return loadRoutes
}
