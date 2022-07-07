<template>
	<a-layout id="default-layout">
		<Sider />
		<a-layout>
			<Header />
			<a-layout-content style="padding: 1rem">
				<router-view></router-view>
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>

<style lang="scss" scoped>
#default-layout {
	height: 100%;
	width: 100%;
}
</style>
