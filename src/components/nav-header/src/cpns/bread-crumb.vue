<template>
  <div class="bread-crumb">
    <ZUbreadcrumb :breadcrumb="breadcrumbs" :separator="'>'" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import ZUbreadcrumb, { TBreadcrumbs } from '@/base-ui/breadcrumb'
export default defineComponent({
  components: {
    ZUbreadcrumb
  },
  setup() {
    const store = useStore()
    const breadcrumbs = computed(() => {
      const route = useRoute()
      const userMenus = store.state.login.userMenus
      const bcs: TBreadcrumbs = pathMapBreadcrumbs(userMenus, route.path)
      return bcs
    })
    return {
      breadcrumbs
    }
  }
})
</script>

<style lang="less" scoped>
.bread-crumb {
  padding: 5px;
}
</style>
