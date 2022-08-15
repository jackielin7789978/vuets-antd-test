<script setup></script>

<template>
	<h1>施工中...</h1>
	<a-row :gutter="{ sm: 12, md: 16, lg: 16, xl: 24 }">
		<a-col :span="12">
			<h1 class="text-2xl">Avatar</h1>
		</a-col>
		<a-col :span="12">
			<h1 class="text-2xl">Badge</h1>
		</a-col>
	</a-row>
	<a-row :gutter="{ sm: 12, md: 16, lg: 16, xl: 24 }" class="mt-8">
		<a-col :span="12">
			<h1 class="text-2xl">Card</h1>
		</a-col>
		<a-col :span="12">
			<h1 class="text-2xl">Collapse</h1>
		</a-col>
	</a-row>
	<a-row :gutter="{ sm: 12, md: 16, lg: 16, xl: 24 }" class="mt-8">
		<a-col :span="12">
			<h1 class="text-2xl">Image</h1>
		</a-col>
		<a-col :span="12">
			<h1 class="text-2xl">List</h1>
		</a-col>
	</a-row>
	<a-row :gutter="{ sm: 12, md: 16, lg: 16, xl: 24 }" class="mt-8">
		<a-col :span="12">
			<h1 class="text-2xl">Statistic</h1>
		</a-col>
		<a-col :span="12">
			<h1 class="text-2xl">Empty</h1>
		</a-col>
	</a-row>
	<a-row :gutter="{ sm: 12, md: 16, lg: 16, xl: 24 }" class="mt-8">
		<a-col :span="12">
			<h1 class="text-2xl">Tooltip</h1>
		</a-col>
		<a-col :span="12">
			<h1 class="text-2xl">Popover</h1>
		</a-col>
	</a-row>
	<a-row :gutter="{ sm: 12, md: 16, lg: 16, xl: 24 }" class="mt-8">
		<a-col :span="12">
			<h1 class="text-2xl">Calendar</h1>
		</a-col>
		<a-col :span="12"> </a-col>
	</a-row>
	<a-row :gutter="{ sm: 12, md: 16, lg: 16, xl: 24 }" class="mt-8">
		<a-col :span="12">
			<h1 class="text-2xl">Descriptions</h1>
		</a-col>
		<a-col :span="12"> </a-col>
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
