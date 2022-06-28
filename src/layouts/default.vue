<script setup>
import Header from './components/Header.vue'
import { ref } from 'vue'
const collapsed = ref(false)
</script>

<template>
  <a-layout id="default-layout">
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      style="background: #222"
    ></a-layout-sider>
    <a-layout>
      <Header />
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style lang="scss" scoped>
#default-layout {
  height: 100%;
  width: 100%;
}
</style>
