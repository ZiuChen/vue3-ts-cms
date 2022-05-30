import type { App } from 'vue'
import registerElement from './register-element'

export default function registerApp(app: App): void {
  registerElement(app)
}
