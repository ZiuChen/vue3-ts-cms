import type { App } from 'vue'
import registerElement from './register-element'
import registerIcons from './register-icons'
import registerProperties from './register-properties'

export default function registerApp(app: App): void {
  app.use(registerElement)
  app.use(registerIcons)
  app.use(registerProperties)
}
