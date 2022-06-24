import { TPropList, IChildrenProps } from '@/base-ui/table/types'

export interface IContentConfig {
  title: string
  propList: TPropList
  childrenProps?: IChildrenProps
  showIndexColumn?: boolean
  showSelectColumn?: boolean
}
