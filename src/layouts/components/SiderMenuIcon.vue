<script setup lang="ts">
import {
	HomeOutlined,
	DashboardOutlined,
	ApartmentOutlined,
	EditOutlined,
	AppstoreOutlined,
	TeamOutlined,
	SettingOutlined,
} from '@ant-design/icons-vue'

enum MenuIcons {
	HomeOutlined,
	DashboardOutlined,
	ApartmentOutlined,
	EditOutlined,
	AppstoreOutlined,
	TeamOutlined,
	SettingOutlined,
}
defineProps<{
	iconComponent: MenuIcons
}>()
</script>

<template>
	<component :is="iconComponent"></component>
</template>
