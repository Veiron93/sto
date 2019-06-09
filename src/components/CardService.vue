<template>
	<div class="CardService">
		{{service.count}}
	</div>
</template>

<script>
	export default {
		name: 'CardService',

		props: {
			service:{
				//type: Object
			},
		},

		data() {
			return{

			}
		},

		methods:{
			
		}
	}
</script>

<style lang="scss">
	.CardService{
		border: 1px solid;
		margin-bottom: 20px;
	}
</style>
