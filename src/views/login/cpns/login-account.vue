<template>
  <div class="login-account">
    <el-form :model="account" :rules="rules" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="account.password"
          @keyup.enter="handleKeyUpEnter"
          show-password
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import { rules } from '../config/account-config'
import localCache from '@/utils/cache'

export default defineComponent({
  setup(props, { emit }) {
    const store = useStore()
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          localCache.setCache('name', account.name)
          if (isKeepPassword) {
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('password')
          }
          store.dispatch('login/accountLoginAction', { ...account })
        } else {
          return
        }
      })
    }
    const handleKeyUpEnter = () => emit('LoginTrigger')
    return {
      account,
      rules,
      formRef,
      loginAction,
      handleKeyUpEnter
    }
  }
})
</script>

<style scoped></style>
