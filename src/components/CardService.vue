<template>
	<div class="CardService">
		<div class="description">
			<div class="name">
				<a href="">
					{{topService.name}}<br>
				</a>
			</div>

			<div class="views" title="Просмотров">
				<p>{{topService.countView}}</p>
				<img src="@/assets/img/icons/eye.svg" alt="">
			</div>
		</div>
		
		
		<div class="carServices" v-if="topService.car_services.length > 0">
			<a href="" v-for="carService in topService.car_services">
				{{carService.name}}
			</a>
		</div>
	
	</div>
</template>

<script>
	export default {
		name: 'CardService',

		props: {
			topService:{
				//type: Object
			},
		},

		data() {
			return{

			}
		},

		mounted(){
			
		},

		methods:{
	
		},

		created: function(){

		}
	}
</script>

<style lang="scss">
	.CardService{	
		border-radius: 4px;
		margin-bottom: 16px;
		box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
		background: #fff;
		padding: 8px 10px;

		.description{
			display: flex;
			align-items: center;
			justify-content: space-between;

			.name{
				a{
	
				}
			}

			.views{
				display: flex;
				align-items: center;
				margin-left: 30px;
				display: none;

				img{
					height: 12px;
					margin-left: 4px;
					opacity: .8;
				}
				p{
					margin: 0;
					margin-left: 5px;
					color: #8c8c8c;
					font-size: 13px;
				}
			}
		}

		.carServices{
			border-top: 1px solid #f5f5f5; 
			margin-top: 5px;
			padding-top: 3px;
			a{
				margin-right: 10px;
				text-decoration: none;
				font-size: 14px;
				color: $accentHover;
			}
		}
	}
</style>
