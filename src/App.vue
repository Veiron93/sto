<template>
	<div id="app">
		<Header />
		<router-view/>
	</div>
</template>

<script>
	import common from '@/resources/js/common.js';	

	export default {
		components: {
			Header: () => import('@/components/Header.vue')
		},
	}
</script>

<style lang="scss">
	@import "~../node_modules/normalize.css/normalize.css";
	@import "~../node_modules/bootstrap/scss/bootstrap-grid.scss";
	@import "~../node_modules/animate.css/animate.min.css";
	//@import "~../node_modules/slim-select/src/slim-select/slimselect.scss";
	@import '~../node_modules/vue-select/src/scss/vue-select.scss';
	@import "@/resources/sass/main.scss";
</style>
