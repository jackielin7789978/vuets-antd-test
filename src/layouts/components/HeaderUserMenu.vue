<script setup>
import { UserOutlined } from '@ant-design/icons-vue'
</script>

<template>
	<a-dropdown placement="bottom">
		<a-space class="cursor-pointer px-2 hover:bg-light-400">
			<a-avatar>
				<template #icon>
					<UserOutlined />
				</template> </a-avatar
			>Admin 1
		</a-space>
		<template #overlay>
			<a-menu>
				<a-menu-item>
					<li>設定</li>
				</a-menu-item>
				<a-menu-item>
					<li>登出</li>
				</a-menu-item>
			</a-menu>
		</template>
	</a-dropdown>
</template>
