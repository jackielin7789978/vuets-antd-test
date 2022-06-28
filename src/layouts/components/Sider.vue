<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
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
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
      <a-menu-item key="/">
        <template #icon>
          <home-outlined />
        </template>
        <router-link to="/">首頁</router-link>
      </a-menu-item>
      <a-menu-item key="/dashboard">
        <template #icon>
          <dashboard-outlined />
        </template>
        <router-link to="/dashboard">主控台</router-link>
      </a-menu-item>

      <a-sub-menu>
        <template #icon>
          <apartment-outlined />
        </template>
        <template #title>自動化流程</template>
        <a-menu-item key="3">
          <template #icon>
            <edit-outlined />
          </template>
          Option 1
        </a-menu-item>
        <a-menu-item key="4">
          <template #icon>
            <tool-outlined />
          </template>
          Option 2
        </a-menu-item>
        <a-menu-item key="5">
          <template #icon>
            <control-outlined />
          </template>
          Option 3
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu>
        <template #icon>
          <apartment-outlined />
        </template>
        <template #title>自動化流程</template>
        <a-menu-item key="6">
          <template #icon>
            <edit-outlined />
          </template>
          Option 1
        </a-menu-item>
        <a-menu-item key="7">
          <template #icon>
            <tool-outlined />
          </template>
          Option 2
        </a-menu-item>
        <a-menu-item key="8">
          <template #icon>
            <control-outlined />
          </template>
          Option 3
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
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
