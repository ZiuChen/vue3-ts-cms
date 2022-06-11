<template>
  <div class="login-phone">
    <el-form :model="account" :rules="rules" ref="formRef">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="account.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="form-item-code">
          <el-input class="code-input" v-model="account.code" />
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      phone: '',
      code: ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          store.dispatch('login/phoneLoginAction', { ...account })
        } else {
          return
        }
      })
    }
    return {
      account,
      formRef,
      rules,
      loginAction
    }
  }
})
</script>

<style lang="less" scoped>
.form-item-code {
  display: flex;
  justify-content: space-between;
  .code-input {
    width: 50%;
  }
}
</style>
