<script setup>
import BaseMenuItem from './BaseMenuItem.vue'
import BaseMenuIcon from './BaseMenuIcon.vue'

const props = defineProps({
  item: Object,
  default: () => {},
})
</script>

<template>
  <BaseMenuItem v-if="!item.children || !item.children.length" :item="item" />
  <a-sub-menu
    v-if="item.children && item.children.length"
    :key="`sub-${item.id}`"
  >
    <template #title>
      {{ item.name }}
    </template>
    <template #icon>
      <BaseMenuIcon :iconComponent="item.icon" />
    </template>

    <template v-for="childItem in item.children || []" :key="childItem.path">
      <BaseSubMenuItem :item="childItem" />
    </template>
  </a-sub-menu>
</template>
