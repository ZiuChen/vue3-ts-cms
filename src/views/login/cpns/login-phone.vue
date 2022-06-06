<template>
  <div class="login-phone">
    <el-form :model="account" :rules="rules">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="account.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="account.code" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const account = reactive({
      phone: '',
      code: ''
    })
    return {
      account,
      rules
    }
  }
})
</script>

<style scoped></style>
