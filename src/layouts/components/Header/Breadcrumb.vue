<script setup>
import { useMenuStore } from '@/stores/menu.js'
import { toRaw, watch, ref } from 'vue'
import { useRoute } from 'vue-router'

const menu = useMenuStore()
const menuTree = toRaw(menu.menuTree)
const route = useRoute()

watch(route, () => {
  getBreadcrumbList()
})

const breadcrumbList = ref([])
getBreadcrumbList()

function getBreadcrumbList() {
  let result = []
  menuTree.forEach((node) => {
    if (node.path === route.path) return (result = node)
    node.children.forEach((node) => {
      if (node.path === route.path) return (result = node)
    })
  })

  breadcrumbList.value = result.breadcrumbs
}
</script>

<template>
  <a-breadcrumb :class="breadcrumbList ? '' : 'opacity-0'">
    <a-breadcrumb-item v-for="breadcrumb in breadcrumbList" :key="breadcrumb">
      <router-link v-if="breadcrumb.redirect" :to="breadcrumb.redirectPath">{{
        breadcrumb.name
      }}</router-link>
      <span v-else>{{ breadcrumb.name }}</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>
