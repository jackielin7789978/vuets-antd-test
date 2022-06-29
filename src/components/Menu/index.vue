<script setup>
import BaseSubMenuItem from './BaseSubMenuItem.vue'

const props = defineProps({
  menuTree: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <a-menu>
    <template v-for="item in menuTree" :key="item.path">
      <BaseSubMenuItem :item="item" />
    </template>
  </a-menu>
</template>
