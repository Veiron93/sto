<template>
	<div class="leftSide">
		<div class="links">
			<router-link to="/top">Популярное</router-link>
			<router-link to="/top">Авто.ру</router-link>
			<router-link to="/top">Дром.ру</router-link>
			<router-link to="/top">Рекомендуем</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'LeftSide',

		data() {
			return{

			}
		},

		methods:{
			
		}
	}
</script>

<style lang="scss">
	.leftSide{
		.links{
			display: flex;
			flex-direction: column;

			a{
				margin: 0;
				margin-bottom: 10px;
				font-size: 13px;
				letter-spacing: .5px;
				width: 100%;
				text-transform: uppercase;

				&:last-child{
					margin-bottom: 0;
				}
			}
		}
	}
</style>
