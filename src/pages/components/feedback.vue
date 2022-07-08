<script setup>
import { message } from 'ant-design-vue'
import { ref } from 'vue'
import { useAlertStore } from '@/stores/alert'
import { InfoCircleOutlined } from '@ant-design/icons-vue'

const showMsg = (type) => {
	switch (type) {
		case 'success':
			message.success('success')
			break
		case 'warning':
			message.warning('warning')
			break
		case 'error':
			message.error('error')
			break
		default:
			message.info('normal info')
	}
}

const showSequenceMsg = () => {
	message.loading('登入中....').then(() => {
		message.success('登入成功！')
	})
}

const showStatefulMsg = () => {
	const key = 'key'
	message.loading({ content: '檔案上傳中...', key })
	setTimeout(() => {
		message.success({ content: '上傳成功！', key, duration: 3 })
	}, 2000)
}

const showAlert = (type) => {
	const alert = useAlertStore()
	alert.isShown = true
	alert.type = type
}

const isModalOpen = ref(false)
const showModal = () => (isModalOpen.value = true)
const handleOk = () => (isModalOpen.value = false)
</script>

<template>
	<h1 class="text-2xl">Message</h1>
	<a-row :gutter="{ sm: 12, md: 16, lg: 16, xl: 24 }">
		<a-col :span="12">
			<a-card :bordered="false">
				<template #title>
					<div class="font-semibold text-lg">基本用法</div>
				</template>
				<div class="flex gap-x-4 gap-y-2 flex-wrap">
					<a-button type="primary" @click="showMsg">顯示普通訊息</a-button>
					<a-button @click="showMsg('success')">顯示成功訊息</a-button>
					<a-button @click="showMsg('warning')">顯示警示訊息</a-button>
					<a-button type="danger" @click="showMsg('error')"
						>顯示錯誤訊息</a-button
					>
				</div>
			</a-card>
		</a-col>
		<a-col :span="12">
			<a-card :bordered="false">
				<template #title>
					<div class="font-semibold text-lg">改變狀態</div>
				</template>
				<div class="flex gap-x-4 gap-y-2 flex-wrap">
					<a-button @click="showSequenceMsg">顯示連續訊息</a-button>
					<a-button @click="showStatefulMsg">改變訊息</a-button>
				</div>
			</a-card>
		</a-col>
	</a-row>

	<a-row :gutter="{ sm: 12, md: 16, lg: 16, xl: 24 }">
		<a-col :span="12">
			<h1 class="text-2xl mt-8">Alert</h1>
			<a-card :bordered="false">
				<template #title>
					<div class="font-semibold text-lg">基本用法</div>
				</template>
				<div class="flex gap-x-4 gap-y-2 flex-wrap">
					<a-button @click="showAlert('success')">顯示 Success Alert</a-button>
					<a-button @click="showAlert('info')">顯示 Info Alert</a-button>
					<a-button @click="showAlert('warning')">顯示 Warning Alert</a-button>
					<a-button @click="showAlert('error')">顯示 Error Alert</a-button>
				</div>
			</a-card>
		</a-col>
		<a-col :span="12">
			<h1 class="text-2xl mt-8">Modal</h1>
			<a-card :bordered="false">
				<template #title>
					<div class="font-semibold text-lg">基本用法</div>
				</template>
				<div class="flex gap-x-4 gap-y-2 flex-wrap">
					<a-button @click="showModal">開啟 Modal</a-button>
					<a-modal
						v-model:visible="isModalOpen"
						@ok="handleOk"
						:okButtonProps="{ size: 'large' }"
						:cancelButtonProps="{ size: 'large' }"
					>
						<template #title>
							<div class="flex items-center gap-x-2">
								<info-circle-outlined class="text-lg relative mt-1" />Basic
								Modal
							</div>
						</template>
						<p>最基本的 Modal</p>
						<p>標題可加 icon、按鈕加大</p>
					</a-modal>
				</div>
			</a-card>
		</a-col>
	</a-row>
</template>
