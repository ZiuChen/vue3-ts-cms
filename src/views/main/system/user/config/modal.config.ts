import { IModalConfig } from '@/components/page-modal/types'
export const modalConfig: IModalConfig = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '手机号码',
      placeholder: '请输入手机号码'
    },
    {
      field: 'enable',
      type: 'select',
      label: '状态',
      placeholder: '请选择状态',
      options: [
        { title: '启用', value: 1 },
        { title: '停用', value: 0 }
      ]
    }
  ],
  colLayout: {
    xl: 24,
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24
  },
  pageName: '新建用户'
}
