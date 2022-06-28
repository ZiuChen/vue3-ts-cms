<template>
  <div class="role">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @tableDataUpdate="handleTableDataUpdate"
    ></PageSearch>
    <PageContent
      ref="pageContentRef"
      :pageName="'role'"
      :moduleName="'system'"
      :contentTableConfig="contentTableConfig"
      @showModal="handleModalChange"
    ></PageContent>
    <PageModal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
      :otherInfo="otherInfo"
      :pageName="'role'"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="userMenus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        />
      </div>
    </PageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { ElTree } from 'element-plus'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
import { useStore } from '@/store'
import { menuMapLeafKeys } from '@/utils/map-menus'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, handleTableDataUpdate] = usePageSearch()
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const updateCallbackFn = (payload: any) => {
      const menuListKeys = menuMapLeafKeys(payload.menuList)
      nextTick(() => elTreeRef.value?.setCheckedKeys(menuListKeys, false))
    }
    const [pageModalRef, defaultInfo, handleModalChange] =
      usePageModal(updateCallbackFn)
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)
    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const { checkedKeys, halfCheckedKeys } = data2
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }
    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      pageContentRef,
      handleTableDataUpdate,
      pageModalRef,
      defaultInfo,
      handleModalChange,
      userMenus,
      otherInfo,
      handleCheckChange,
      elTreeRef
    }
  }
})
</script>

<style lang="less" scoped>
.menu-tree {
  margin-left: 50px;
}
</style>
