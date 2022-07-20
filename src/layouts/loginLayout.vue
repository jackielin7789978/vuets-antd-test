<template>
	<div
		class="loginBackground"
		:style="{
			minHeight: '100%',
			height: '100%',
			overflow: 'hidden',
		}"
	>
		<div
			class="mask"
			:style="{
				minHeight: '100%',
				height: '100%',
				overflow: 'hidden',
			}"
		>
			<router-view></router-view>
			<footer class="absolute bottom-4 inset-x-0 text-center">
				© COPYRIGHT ALL RIGHTS RESERVED
			</footer>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.loginBackground {
	background: linear-gradient(
		45deg,
		rgba(15, 196, 202, 1) 0%,
		rgba(0, 205, 173, 1) 100%
	);
}
.mask {
	background: rgba(0, 0, 0, 0.2);
}
</style>
