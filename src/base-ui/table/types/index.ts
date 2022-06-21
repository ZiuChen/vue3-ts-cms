export type IPropList = {
  prop?: string
  label: string
  minWidth: string | number
  slotName?: string
}[]

export interface IPageInfo {
  currentPage: number
  pageSize: number
}
