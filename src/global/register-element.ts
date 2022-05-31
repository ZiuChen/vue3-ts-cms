declare function require(moduleName: string): void
import type { App } from 'vue'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-loading.css'
import { ElButton } from 'element-plus'

const components = [ElButton]

export default function registerElement(app: App): void {
  components.forEach((c) => {
    const name = transferCamel(c.name)
    require(`element-plus/theme-chalk/${name}.css`)
    app.component(name, c)
  })
}

function transferCamel(camel: string): string {
  return 'el-' + camel.toLocaleLowerCase().split('el')[1]
}
