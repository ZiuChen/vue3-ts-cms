<template>
  <div class="nav-header">
    <el-icon class="expand-btn" @click="handleCollapseClick">
      <expand v-if="isCollapse" />
      <fold v-else />
    </el-icon>
    <div class="content">
      <div>面包屑</div>
      <UserInfo />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import UserInfo from './cpns/user-info.vue'
export default {
  components: {
    UserInfo
  },
  setup(props, { emit }) {
    const isCollapse = ref(false)
    const handleCollapseClick = () => {
      isCollapse.value = !isCollapse.value
      emit('collapsechange', isCollapse.value)
    }
    return {
      isCollapse,
      handleCollapseClick
    }
  }
}
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  .expand-btn {
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    width: 100%;
  }
}
</style>
