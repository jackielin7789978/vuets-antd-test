<script setup>
import { message } from 'ant-design-vue'

const showMsg = () => {
	message.warning('hello', 60)
}
</script>

<template>
	<a-button type="primary" @click="showMsg">Display normal message</a-button>
</template>
