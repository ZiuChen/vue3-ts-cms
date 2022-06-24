export type TPropItem = {
  prop?: string // e.g. operation column
  label: string
  minWidth?: string | number
  slotName?: string
  isPrivate?: boolean
}

export type TPropList = TPropItem[]

export interface IPageInfo {
  currentPage: number
  pageSize: number
}
