<template>
  <el-result
    icon="error"
    title="Not Found"
    sub-title="Click button below to go back."
  >
    <template #extra>
      <el-button type="primary" @click="handleBackClick">Back</el-button>
    </template>
  </el-result>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
    const handleBackClick = () => {
      router.push('/main')
    }
    return {
      handleBackClick
    }
  }
})
</script>

<style lang="less" scoped></style>
