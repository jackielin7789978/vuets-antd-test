<script setup>
import {
	HomeOutlined,
	DashboardOutlined,
	ApartmentOutlined,
	EditOutlined,
	AppstoreOutlined,
	TeamOutlined,
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
}
</script>

<template>
	<component :is="icons[iconComponent]"></component>
</template>
