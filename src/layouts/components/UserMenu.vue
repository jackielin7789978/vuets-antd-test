<script setup>
import { UserOutlined, DownOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <a-dropdown>
    <button
      class="ant-dropdown-link h-full px-2 hover:bg-light-400 flex items-center gap-x-2"
    >
      <a-avatar>
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
      <span class="">使用者名稱</span>
      <DownOutlined />
    </button>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <nuxt-llnk @click.prevent>選項一</nuxt-llnk>
        </a-menu-item>
        <a-menu-item>
          <nuxt-llnk @click.prevent>選項二</nuxt-llnk>
        </a-menu-item>
        <a-menu-item>
          <a @click.prevent>登出</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
