import type { IUserMenus, ISubMenus } from '@/service/login/type'
import type { IBreadcrumb } from '@/base-ui/breadcrumb/types'
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

export function mapMenusToPermissions(userMenus: IUserMenus) {
  const permissions: string[] = []
  const _recurseGetPermission = (menus: IUserMenus | ISubMenus) => {
    for (const m of menus) {
      if (m.type === 1 || m.type === 2) {
        _recurseGetPermission(m.children ?? [])
      } else {
        permissions.push(m.permission ?? '')
      }
    }
  }
  _recurseGetPermission(userMenus)
  return permissions
}

export function pathMapBreadcrumbs(
  userMenus: IUserMenus | ISubMenus,
  currentPath: string
) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

export function pathMapToMenu(
  userMenus: IUserMenus | ISubMenus,
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  // TODO: 此处用`forEach`遍历会报错 为什么?
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const targetMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (targetMenu) {
        breadcrumbs?.push({ name: menu.name }, { name: targetMenu.name })
        return targetMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export function menuMapLeafKeys(menuList: IUserMenus | ISubMenus) {
  const leftKeys: number[] = []
  const _recurseGetLeaf = (menuList: IUserMenus | ISubMenus) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leftKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)
  return leftKeys
}

export { firstMenu }
