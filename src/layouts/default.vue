<template>
	<BasicAlert />
	<a-layout id="default-layout" :style="{ minHeight: '100%' }">
		<Sider />
		<a-layout>
			<Header />
			<a-layout-content class="p-4 md:p-6 lg:p-8">
				<router-view></router-view>
			</a-layout-content>
			<a-layout-footer class="text-center"
				>© COPYRIGHT ALL RIGHTS PRESERVED</a-layout-footer
			>
		</a-layout>
	</a-layout>
</template>
