<script setup>
import {
	HomeOutlined,
	DashboardOutlined,
	ApartmentOutlined,
	EditOutlined,
	AppstoreOutlined,
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
}
</script>

<template>
	<component :is="icons[iconComponent]"></component>
</template>
