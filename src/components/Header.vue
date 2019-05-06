<template>
	<header>
		<div class="left-section">
			<div class="logo">
				<a href="">
					<img src="@/assets/img/logo.png" alt="">
				</a>
			</div>

			<div class="cities">
				<select name="" id="">
					<option v-for="city in cities" :value="city.code">
						{{ city.name }}
					</option>
				</select>
			</div>
		</div>

		<div class="rigth-section">
			<div class="top-navigation">
				<router-link to="/">Автосервисы</router-link>
			</div>

			<div class="btn-menu">
				<img src="@/assets/img/icons/menu.svg" alt="">
			</div>
		</div>	
	</header>
</template>

<script>
	export default {
		name: 'Header',

		data() {
			return{
				cities: [
					{name: 'Южно-Сахалинск', code: 'ys'},
					{name: 'Долинск', code: 'dolinsk'},
					{name: 'Корсаков', code: 'korsakov'},
				]
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	header{
		width: 100%;
		max-width: 1140px;
		padding: 0px 15px;
		margin: 0px auto;
		border: 1px solid;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.left-section, .rigth-section{
			display: flex;
			align-items: center;
		}

		.left-section{
			.logo{
				margin-right: 100px;
				a{
					img{
						height: 36px;
						display: block;
					}
				}
			}	
		}

		.rigth-section{

			.top-navigation{
				a{
					text-transform: uppercase;
					font-size: 14px;
					text-decoration: none;
					color: #000;
					letter-spacing: .5px;
				}
			}

			.btn-menu{
				margin-left: 50px;
				border: 1px solid;
				flex: none;
				width: 40px;
				height: 40px;
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;

				img{
					width: 24px;
					height: 24px;
				}
			}
		}
		
		

		
	}
</style>
