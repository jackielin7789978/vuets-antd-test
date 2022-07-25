<script setup>
import {
	HomeOutlined,
	DashboardOutlined,
	ApartmentOutlined,
	EditOutlined,
	AppstoreOutlined,
	TeamOutlined,
	SettingOutlined,
} from '@ant-design/icons-vue'

defineProps({
	iconComponent: String,
})

const icons = {
	HomeOutlined,
	DashboardOutlined,
	ApartmentOutlined,
	EditOutlined,
	AppstoreOutlined,
	TeamOutlined,
	SettingOutlined,
}
</script>

<template>
	<component :is="icons[iconComponent]"></component>
</template>
