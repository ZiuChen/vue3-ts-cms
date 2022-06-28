import { IModalConfig } from '@/components/page-modal/types'
export const modalConfig: IModalConfig = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'leader',
      type: 'input',
      label: '主管人员',
      placeholder: '请输入主管人员'
    }
  ],
  colLayout: {
    xl: 24,
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24
  },
  pageName: '新建部门'
}
