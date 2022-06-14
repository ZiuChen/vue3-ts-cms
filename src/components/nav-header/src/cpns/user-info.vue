<template>
  <div class="user-info">
    <el-avatar :size="30">
      <template #default>
        <el-icon><Avatar /></el-icon>
      </template>
    </el-avatar>
    <el-dropdown class="nav-dropdown">
      <span class="user-name">{{ userName }}</span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <el-icon><CircleCloseFilled /></el-icon>
            退出系统
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const userInfo = store.state.login.userInfo
    const userName = userInfo.name
    return {
      userName
    }
  }
}
</script>

<style lang="less" scoped>
.user-info {
  display: flex;
  align-items: center;
  .nav-dropdown {
    cursor: pointer;
  }
  .user-name {
    padding: 5px;
  }
}
</style>
