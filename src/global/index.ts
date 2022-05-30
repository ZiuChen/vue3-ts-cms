import type { App } from 'vue'
import registerElement from './register-element'

export default function registerApp(app: App): void {
  app.use(registerElement)
}
