<template>
  <div class="user-info">
    <UserOptions />
    <el-avatar :size="30">
      <template #default>
        <el-icon><Avatar /></el-icon>
      </template>
    </el-avatar>
    <el-dropdown class="nav-dropdown">
      <span class="user-name">{{ userName }}</span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="List">用户信息</el-dropdown-item>
          <el-dropdown-item icon="Comment">消息设置</el-dropdown-item>
          <el-dropdown-item
            icon="CircleCloseFilled"
            @click="handleExitClick"
            divided
          >
            退出系统
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import UserOptions from './user-options.vue'
import { useStore } from 'vuex'
import localCache from '@/utils/cache'
import { useRouter } from 'vue-router'
export default {
  components: {
    UserOptions
  },
  setup() {
    const store = useStore()
    const userInfo = store.state.login.userInfo
    const userName = userInfo.name
    const router = useRouter()
    const handleExitClick = () => {
      localCache.deleteCache('token')
      router.push('/main')
    }
    return {
      userName,
      handleExitClick
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
