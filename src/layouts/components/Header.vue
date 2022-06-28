<script setup>
import UserMenu from './UserMenu.vue'
import { BellOutlined, SearchOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <a-layout-header class="header">
    <a-breadcrumb>
      <a-breadcrumb-item>首頁</a-breadcrumb-item>
      <a-breadcrumb-item><a href="">主控台</a></a-breadcrumb-item>
      <a-breadcrumb-item>設定</a-breadcrumb-item>
    </a-breadcrumb>
    <a-space size="middle">
      <SearchOutlined class="nav-controls" />
      <BellOutlined class="nav-controls" />
      <UserMenu />
    </a-space>
  </a-layout-header>
</template>

<style lang="scss" scoped>
.header {
  @apply bg-white flex items-center justify-between pr-4 pl-14;
}
.nav-controls {
  @apply text-1.25rem relative top-2px cursor-pointer hover:text-black;
}
</style>
