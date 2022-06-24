import { IFormItem } from '@/base-ui/form/types'

export interface IFormData {
  [key: string]: string
}

export interface ISearchFormConfig {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
}
