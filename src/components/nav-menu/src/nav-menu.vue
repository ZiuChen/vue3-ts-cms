<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!collapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical"
      :collapse="collapse"
      unique-opened
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="menu of userMenus" :key="menu.id">
        <template v-if="menu.type === 1">
          <el-sub-menu :index="menu.id.toString()">
            <template #title>
              <el-icon>
                <component :is="menu.icon" />
              </el-icon>
              <span>{{ menu.name }}</span>
            </template>
            <template v-for="subMenu of menu.children" :key="subMenu.id">
              <el-menu-item
                :index="subMenu.id.toString()"
                @click="handleMenuClick(subMenu)"
              >
                {{ subMenu.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item
            :index="menu.id.toString()"
            @click="handleMenuClick(menu)"
          >
            {{ menu.name }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'
export default defineComponent({
  props: {
    collapse: Boolean
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const userMenus = computed(() => store.state.login.userMenus)
    const handleMenuClick = (menuItem) => {
      router.push(menuItem.url)
    }
    const defaultActive = ref('')
    const currentMenu = pathMapToMenu(userMenus.value, route.path)
    defaultActive.value = currentMenu.id.toString()
    return {
      userMenus,
      handleMenuClick,
      defaultActive
    }
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-sub-menu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
