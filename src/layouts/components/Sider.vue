<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMenuStore } from '@/stores/menu'
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
const selectedKeys = ref(['1'])
const siderCollapsed = ref(false)

onMounted(() => {
  const route = useRoute()
  selectedKeys.value.splice(0, 1, route.path)
})

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
      :menuTree="menu.menuTree"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
    />
  </a-layout-sider>
</template>

<style lang="scss" scoped>
#logo {
  height: 3.5rem;
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
