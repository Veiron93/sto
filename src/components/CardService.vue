<template>
	<div class="CardService">
		<div class="description">
			<div class="name">
				<a href="">
					{{topService.name}}<br>
				</a>
			</div>

			<div class="views" title="Просмотры за неделю">
				<!--<img src="@/assets/img/icons/eye.svg" alt="">-->
				<p>{{topService.countViewWeek}}</p>
			</div>
		</div>
		
		<div class="carServices" v-if="topService.carServices">
			<a href="" v-for="carService in topService.carServices">
				{{carService.price}}
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

		methods:{
			
		}
	}
</script>

<style lang="scss">
	.CardService{
		//border: 1px solid;
		
		border-radius: 4px;
		margin-bottom: 20px;
		box-shadow: 0px 1px 3.8px 0.2px rgba(0, 0, 0, 0.2);
		background: #fff;
		padding: 5px 10px;

		.description{
			display: flex;
			align-items: center;
			justify-content: space-between;

			.name{
				a{
					text-decoration: none;
					font-size: 16px;
					color: #484848;

				}
			}

			.views{
				display: flex;
				align-items: center;
				margin-left: 30px;

				img{
					height: 16px;
				}
				p{
					margin-left: 5px;
					margin-bottom: 0;
					color: #484848;
					font-size: 14px;
				}
			}
		}

		.carServices{
			border-top: 1px solid #e2e2e2; 
			margin-top: 1px;
			padding-top: 3px;
			a{
				margin-right: 10px;
				text-decoration: none;
				font-size: 13px;
				font-weight: bold;
				color: #1F9FD4;
			}
		}

		
	}
</style>
