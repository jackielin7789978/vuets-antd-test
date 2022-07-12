<script setup>
import { message, Modal } from 'ant-design-vue'
import { ref, h } from 'vue'
import { useAlertStore } from '@/stores/alert'
import {
	InfoCircleOutlined,
	SmileOutlined,
	FrownOutlined,
} from '@ant-design/icons-vue'

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

const isCardLoading = ref(false)

const triggerLoading = () => {
	isCardLoading.value = true
	setTimeout(() => {
		isCardLoading.value = false
	}, 2500)
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
					<BasicButton type="primary" @click="showMsg"
						>顯示普通訊息</BasicButton
					>
					<BasicButton
						type="primary"
						color="success"
						@click="showMsg('success')"
						>顯示成功訊息</BasicButton
					>
					<BasicButton
						type="primary"
						color="warning"
						@click="showMsg('warning')"
						>顯示警示訊息</BasicButton
					>
					<BasicButton type="primary" danger @click="showMsg('error')"
						>顯示錯誤訊息</BasicButton
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
					<BasicButton @click="showSequenceMsg">顯示連續訊息</BasicButton>
					<BasicButton @click="showStatefulMsg">改變訊息</BasicButton>
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
					<BasicButton color="success" @click="showAlert('success')"
						>顯示 Success Alert</BasicButton
					>
					<BasicButton @click="showAlert('info')" type="primary" ghost
						>顯示 Info Alert</BasicButton
					>
					<BasicButton color="warning" @click="showAlert('warning')"
						>顯示 Warning Alert</BasicButton
					>
					<BasicButton @click="showAlert('error')" danger
						>顯示 Error Alert</BasicButton
					>
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
					<BasicButton @click="showModal">一般 Modal</BasicButton>
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
					<BasicButton @click="showCenteredModal">垂直置中 Modal</BasicButton>
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
					<BasicButton @click="showConfirmModal" type="primary" danger
						>刪除</BasicButton
					>
					<BasicButton @click="showInfoModal" type="primary">資訊</BasicButton>
					<BasicButton @click="showErrorModal" type="dashed" danger
						>錯誤</BasicButton
					>
					<BasicButton @click="showSuccessModal" type="dashed" color="success"
						>成功</BasicButton
					>
					<BasicButton @click="showWarningModal" type="dashed" color="warning"
						>警示</BasicButton
					>
				</div>
			</a-card>
		</a-col>
	</a-row>

	<a-row class="mt-8" :gutter="{ sm: 12, md: 16, lg: 16, xl: 24 }">
		<a-col :span="12">
			<h1 class="text-2xl">Result</h1>
			<a-card>
				<a-result title="您已完成所有步驟！">
					<template #icon>
						<SmileOutlined />
					</template>
					<template #extra>
						<BasicButton type="primary">回首頁</BasicButton>
					</template>
				</a-result>
			</a-card>
			<a-card>
				<a-result title="抱歉，有東西出錯了...">
					<template #icon>
						<FrownOutlined :style="{ color: '#FF5B52' }" />
					</template>
					<template #extra>
						<BasicButton key="console" type="primary">回首頁</BasicButton>
						<BasicButton key="console">回報錯誤</BasicButton>
					</template>
				</a-result>
			</a-card>
		</a-col>
		<a-col :span="12">
			<h1 class="text-2xl">Progress</h1>
			<a-card>
				<div class="flex flex-col gap-y-13">
					<div class="flex flex-col gap-y-2">
						<ProgressBar :percent="30" />
						<ProgressBar :percent="90" :showInfo="false" />
					</div>
					<div class="flex flex-wrap gap-4">
						<ProgressBar :percent="66" type="circle" :strokeWidth="4" />
						<ProgressBar :percent="100" type="circle" :strokeWidth="5" />
						<ProgressBar :percent="88" type="dashboard" :strokeWidth="6" />
					</div>
					<div>
						<ProgressBar :percent="30" :steps="3" />
						<ProgressBar :percent="50" :steps="5" />
						<ProgressBar
							:percent="80"
							:steps="7"
							stroke-color="#FF5B52"
							status="exception"
						/>
						<ProgressBar :percent="100" :steps="7" stroke-color="#00CDAD" />
					</div>
					<div class="w-1/2">
						<ProgressBar
							:percent="40"
							status="exception"
							size="small"
							stroke-color="#FF5B52"
						/>
						<ProgressBar :percent="100" status="success" size="small" />
					</div>
					<div class="flex flex-wrap gap-4">
						<ProgressBar
							:percent="66"
							type="circle"
							status="exception"
							stroke-color="#FF5B52"
						/>
						<ProgressBar :percent="100" type="circle" status="normal" />
						<ProgressBar :percent="100" type="circle" />
					</div>
				</div>
			</a-card>
		</a-col>
	</a-row>
	<h1 class="text-2xl mt-8">Spin & Card Skeleton</h1>
	<BasicButton @click="triggerLoading" type="primary" class="mt-4 mb-2"
		>開始載入</BasicButton
	>
	<a-row :gutter="{ sm: 12, md: 16, lg: 16, xl: 24 }">
		<a-col :span="12">
			<a-card
				:loading="isCardLoading"
				title="活躍使用者"
				:bodyStyle="{ position: 'relative', height: '9rem' }"
			>
				<template #extra>
					<a-tag color="#00CDAD">週</a-tag>
				</template>
				<a-statistic
					:value="52893"
					:valueStyle="{ margin: '1.5rem 0', fontSize: '2rem' }"
					suffix="人"
				/>
			</a-card>
		</a-col>
		<a-col :span="12">
			<a-spin
				v-if="isCardLoading"
				size="large"
				tip="載入中..."
				class="absolute left-[40%] top-[40%]"
			></a-spin>
			<a-card
				v-else
				title="活躍使用者"
				:bodyStyle="{ position: 'relative', height: '9rem' }"
			>
				<template #extra>
					<a-tag color="#00CDAD">週</a-tag>
				</template>
				<a-statistic
					:value="52893"
					:valueStyle="{ margin: '1.5rem 0', fontSize: '2rem' }"
					suffix="人"
				/>
			</a-card>
		</a-col>
	</a-row>
</template>
