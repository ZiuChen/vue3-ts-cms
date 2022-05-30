declare function require(moduleName: string): void
import type { App } from 'vue'
import 'element-plus/theme-chalk/base.css'
import { ElButton } from 'element-plus/lib/components'

const components = [ElButton]

export default function registerElement(app: App): void {
  components.forEach((c) => {
    require(`element-plus/theme-chalk/${transferCamel(c.name)}.css`)
    app.component(c.name, c)
  })
}

function transferCamel(camel: string): string {
  return 'el-' + camel.toLocaleLowerCase().split('el')[1]
}
