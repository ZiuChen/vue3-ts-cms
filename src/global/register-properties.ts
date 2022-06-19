import type { App } from 'vue'
import { formatUTCString } from '@/utils/date-format'
export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatDate(utcString: string, format?: string) {
      return formatUTCString(utcString, format)
    }
  }
}
