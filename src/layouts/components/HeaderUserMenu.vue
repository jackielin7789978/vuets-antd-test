<script setup lang="ts">
import {
	Modal,
	Menu as AMenu,
	Avatar as AAvatar,
	Dropdown as ADropdown,
} from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { UserOutlined } from '@ant-design/icons-vue'
import { useUserStore } from '@/stores/user'
const AMenuItem = AMenu.Item

const userStore = useUserStore()
const router = useRouter()
const handleLogin = () => {
	Modal.confirm({
		title: '溫馨提醒',
		content: '確定要登出嗎？',
		okText: '登出',
		cancelText: '取消',
		onOk() {
			router.push('/login')
			// 清空 Pinia 和 localStorage 中儲存的使用者資料
			userStore.userInfo = ''
			localStorage.removeItem('user')
		},
	})
}
</script>

<template>
	<ADropdown placement="bottom">
		<a-space class="cursor-pointer px-2 hover:bg-light-400">
			<AAvatar>
				<template #icon>
					<UserOutlined />
				</template>
			</AAvatar>
			Admin 1
		</a-space>
		<template #overlay>
			<AMenu>
				<AMenuItem>
					<li>設定</li>
				</AMenuItem>
				<AMenuItem>
					<li @click="handleLogin">登出</li>
				</AMenuItem>
			</AMenu>
		</template>
	</ADropdown>
</template>
