export const rules = {
  name: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'change'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '账号应为5-10位的字母或数字',
      trigger: 'change'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '密码应为5-10位的字母或数字',
      trigger: 'blur'
    }
  ],
  phone: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'change'
    },
    {
      pattern:
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      message: '请输入正确的手机号',
      trigger: 'change'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{4}$/,
      message: '验证码应为四位字母或数字',
      trigger: 'blur'
    }
  ]
}
