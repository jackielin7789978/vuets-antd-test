<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue'
</script>

<template>
	<a-row :gutter="{ sm: 12, md: 16, lg: 16, xl: 24 }">
		<a-col :span="12">
			<h1 class="text-2xl">Alert</h1>
		</a-col>
		<a-col :span="12">
			<h1 class="text-2xl">Modal</h1>
		</a-col>
	</a-row>
</template>

<style>
#components-avatar-demo-badge .ant-avatar {
	margin-top: 0;
	margin-right: 0;
}
</style>

<route lang="json">
{
	"meta": {
		"requiresLogin": true
	}
}
</route>
