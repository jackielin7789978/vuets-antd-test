<script setup>
import { ref, watch, toRaw } from 'vue'
import { useRoute } from 'vue-router'
import { useMenuStore } from '@/stores/menu'
import useCurrentMenuNode from '@/composables/useCurrentMenuNode'
import {
  HomeOutlined,
  DashboardOutlined,
  ApartmentOutlined,
  EditOutlined,
  ToolOutlined,
  ControlOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons-vue'

const menu = useMenuStore()
const menuTree = toRaw(menu.menuTree)
const route = useRoute()
const currentMenuNode = useCurrentMenuNode(route.path)
const siderCollapsed = ref(false)
const selectedKeys = ref([route.path])
const openKeys = ref([`sub-${currentMenuNode.id[0]}`])

// 問題 1: hot reload 慢到爆
// 問題 2: 有時會噴 maximun recursive updates exceeded 錯誤
// watch(route, () => {
//   const currentMenuNode = useCurrentMenuNode(route.path)
//   openKeys.value = [`sub-${currentMenuNode.id[0]}`]
// })

const toggleSider = () => (siderCollapsed.value = !siderCollapsed.value)
</script>

<template>
  <a-layout-sider
    v-model:collapsed="siderCollapsed"
    :trigger="null"
    collapsible
    style="background: #141414"
    width="240"
    class="relative"
  >
    <button class="collapseBtn" @click="toggleSider">
      <MenuUnfoldOutlined v-if="siderCollapsed" />
      <MenuFoldOutlined v-else />
    </button>

    <!-- logo -->
    <div id="logo">
      <span></span>
    </div>

    <!-- menu -->
    <Menu
      :menuTree="menuTree"
      v-model:selectedKeys="selectedKeys"
      v-model:openKeys="openKeys"
      mode="inline"
      theme="dark"
    />
  </a-layout-sider>
</template>

<style lang="scss" scoped>
#logo {
  height: 4rem;
  width: 100%;
  display: flex;
  span {
    display: inline-block;
    width: 90%;
    margin: auto;
    height: 2.5rem;
    background-color: #77777766;
  }
}

.collapseBtn {
  @apply absolute left-full top-4 rounded-none hover:bg-light-600 w-8 h-8;
}
</style>
