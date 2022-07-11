<script setup>
import { message, Modal } from 'ant-design-vue'
import { ref, h } from 'vue'
import { useAlertStore } from '@/stores/alert'
import { InfoCircleOutlined, SmileOutlined } from '@ant-design/icons-vue'

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
const isCenteredModalOpen = ref(false)
const showModal = () => (isModalOpen.value = true)
const showCenteredModal = () => (isCenteredModalOpen.value = true)
const handleOk = () => (isModalOpen.value = false)
const handleCenteredOk = () => (isCenteredModalOpen.value = false)
const showConfirmModal = () => {
	Modal.confirm({
		autoFocusButton: null,
		title: '確定要刪除這筆資料嗎？',
		content: '這項操作無法還原',
		okButtonProps: { danger: true, size: 'large' },
		cancelButtonProps: { size: 'large' },
	})
}
const showInfoModal = () => {
	Modal.info({
		autoFocusButton: null,
		title: '顯示中性資訊',
		content: () =>
			h('div', { class: 'mt-4' }, [
				h('p', '一些資訊一些資訊一些資訊'),
				h('p', '一些資訊一些資訊一些資訊'),
			]),
	})
}
const showErrorModal = () => {
	Modal.error({
		autoFocusButton: null,
		title: '發生錯誤',
		content: () =>
			h('div', { class: 'mt-4' }, [
				h('p', '一些錯誤訊息一些錯誤訊息'),
				h('p', '一些錯誤訊息一些錯誤訊息'),
			]),
		okType: 'danger',
	})
}
const showSuccessModal = () => {
	Modal.success({
		autoFocusButton: null,
		title: '操作成功',
		content: () =>
			h('div', { class: 'mt-4' }, [
				h('p', '恭喜您恭喜您恭喜您'),
				h('p', '恭喜您恭喜您恭喜您'),
			]),
		okType: 'default',
	})
}
const showWarningModal = () => {
	Modal.warning({
		autoFocusButton: null,
		title: '注意',
		content: () =>
			h('div', { class: 'mt-4' }, [
				h('p', '一些警告訊息一些警告訊息'),
				h('p', '一些警告訊息一些警告訊息'),
			]),
		okType: 'default',
	})
}
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

	<a-row class="mt-8" :gutter="{ sm: 12, md: 16, lg: 16, xl: 24 }">
		<a-col :span="12">
			<h1 class="text-2xl">Alert</h1>
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
			<h1 class="text-2xl">Modal</h1>
			<a-card :bordered="false">
				<template #title>
					<div class="font-semibold text-lg">基本用法</div>
				</template>
				<div class="flex gap-x-4 gap-y-2 flex-wrap">
					<a-button @click="showModal">一般 Modal</a-button>
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
					<a-button @click="showCenteredModal">垂直置中 Modal</a-button>
					<a-modal
						v-model:visible="isCenteredModalOpen"
						@ok="handleCenteredOk"
						centered
						:okButtonProps="{ size: 'large' }"
						:cancelButtonProps="{ size: 'large' }"
					>
						<template #title>
							<div class="flex items-center gap-x-2">
								<info-circle-outlined class="text-lg relative mt-1" />垂直置中
							</div>
						</template>
						<p>垂直置中的 Modal</p>
						<p>位子可再調整</p>
					</a-modal>
					<a-button @click="showConfirmModal" type="danger">刪除</a-button>
					<a-button @click="showInfoModal" type="dashed">資訊</a-button>
					<a-button @click="showErrorModal" type="dashed">錯誤</a-button>
					<a-button @click="showSuccessModal" type="dashed">成功</a-button>
					<a-button @click="showWarningModal" type="dashed">警示</a-button>
				</div>
			</a-card>
		</a-col>
	</a-row>

	<h1 class="text-2xl mt-8">Result</h1>
	<a-row :gutter="{ sm: 12, md: 16, lg: 16, xl: 24 }">
		<a-col :span="12">
			<a-card>
				<a-result title="您已完成所有步驟！">
					<template #icon>
						<SmileOutlined />
					</template>
					<template #extra>
						<a-button type="primary">回首頁</a-button>
					</template>
				</a-result>
			</a-card>
		</a-col>
	</a-row>
</template>
