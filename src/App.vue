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
			Header: () => import('@/components/Header.vue'),
			//Footer: () => import('@/components/Footer.vue'),
		}
	}

	
</script>

<style lang="scss">
  @import "~../node_modules/normalize.css/normalize.css";
  @import "~../node_modules/bootstrap/scss/bootstrap-grid.scss";
  @import "~../node_modules/@fortawesome/fontawesome-free/css/all.css";
  @import "~../node_modules/animate.css/animate.min.css";
  @import "~../node_modules/vuetify/dist/vuetify.min.css";
  @import "/resources/sass/main.scss";
</style>
