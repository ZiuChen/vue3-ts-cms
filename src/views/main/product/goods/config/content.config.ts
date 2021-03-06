import type { IContentConfig } from '@/components/page-content/types'

export const contentTableConfig: IContentConfig = {
  title: '商品列表',
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '100' },
    {
      prop: 'oldPrice',
      label: '原价格',
      minWidth: '100',
      slotName: 'oldPrice',
      isPrivate: true
    },
    {
      prop: 'newPrice',
      label: '新价格',
      minWidth: '100',
      slotName: 'newPrice',
      isPrivate: true
    },
    { prop: 'desc', label: '商品描述', minWidth: '150' },
    {
      prop: 'status',
      label: '状态',
      minWidth: '80',
      slotName: 'status'
    },
    {
      prop: 'imgUrl',
      label: '图片',
      minWidth: '150',
      slotName: 'imgUrl',
      isPrivate: true
    },
    { prop: 'inventoryCount', label: '库存', minWidth: '80' },
    { prop: 'saleCount', label: '销量', minWidth: '80' },
    { prop: 'favorCount', label: '收藏量', minWidth: '80' },
    { prop: 'address', label: '地址', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '100',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '100',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '100',
      slotName: 'handler'
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
