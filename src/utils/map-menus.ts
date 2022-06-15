import type { IUserMenus, ISubMenus } from '@/service/login/type'
import type { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

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
        if (!firstMenu) firstMenu = menu
      } else {
        _recurseGetRoute(menu.children)
      }
    })
  }
  _recurseGetRoute(userMenus)
  return loadRoutes
}

export function pathMapBreadcrumbs(
  userMenus: IUserMenus | ISubMenus,
  currentPath: string
) {
  const breadcrumbs: any[] = pathMapToMenu(userMenus, currentPath, true)
  return breadcrumbs
}

export function pathMapToMenu(
  userMenus: IUserMenus | ISubMenus,
  currentPath: string,
  isBreadcrumbs?: boolean
): any {
  // TODO: 此处用`forEach`遍历会报错 为什么?
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const targetMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (targetMenu) {
        if (isBreadcrumbs) {
          const breadcrumbs: any[] = []
          breadcrumbs.push(menu, targetMenu)
          return breadcrumbs
        }
        return targetMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export { firstMenu }
