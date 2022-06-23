declare function require(moduleName: string): void
import type { App } from 'vue'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/theme-chalk/el-loading.css'
import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElSubMenu,
  ElMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElResult,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElRow,
  ElCol,
  ElSelect,
  ElDatePicker,
  ElOption,
  ElTable,
  ElTableColumn,
  ElTag,
  ElPagination,
  ElConfigProvider,
  ElImage,
  ElImageViewer
} from 'element-plus'

const components = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElLink,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElResult,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElRow,
  ElCol,
  ElTable,
  ElTableColumn,
  ElTag,
  ElPagination,
  ElConfigProvider,
  ElImage,
  ElImageViewer
]

export default function registerElement(app: App): void {
  components.forEach((c) => {
    const name = transferCamel(c.name)
    require(`element-plus/theme-chalk/${name}.css`)
    app.component(name, c)
  })
}

function transferCamel(camel: string): string {
  return camel
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .slice(1)
}
