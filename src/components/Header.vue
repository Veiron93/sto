<template>
	<header>

		<div class="header-wrapper">
			<div class="left-section">
				<div class="logo">
					<a href="">
						<img src="@/assets/img/logo.png" alt="">
					</a>
				</div>

				<v-select v-model="selected" :clearable="clearable" :placeholder="placeholder" class="cities" label="name" :options="cities" ></v-select>
			</div>

			<div class="rigth-section">
				<div class="top-navigation">
					<router-link to="/">Автосервисы</router-link>
				</div>

				<div class="btn-menu" v-on:click="stateMenu = !stateMenu">
					<img src="@/assets/img/icons/menu.svg" alt="">
				</div>
			</div>
		</div>
		

		<transition>
			<div class="right-menu" v-show="stateMenu">

				<div class="topSection">
					<div class="btn-menu" v-on:click="stateMenu = !stateMenu">
						<img src="@/assets/img/icons/close-menu.svg" alt="">
					</div>
				</div>

				<nav>
					<router-link to="/services">Сервисам</router-link>
					<router-link to="/adv">Рекламодателям</router-link>
					<router-link to="/about">О проекте</router-link>
				</nav>
			</div>
		</transition>		
	</header>
</template>

<script>
	

	export default {
		name: 'Header',

		data() {
			return{
				selectCity: null,
				cities: [],
				stateMenu: false,
				selected: null,
				placeholder: "Выберите город",
				clearable: false
			}
		},

		mounted() {
			this.$http
				.get('http://localhost:4000/cities/all')
				.then(response => (this.cities = response.data))
				.catch(() => {
					//console.log(error);
					this.errored = true;
				});
		},

		methods:{
			rightMenu: function(){
				//console.log(111);

				//this.stateMenu = (this.stateMenu == false)? true: false;
			}
		},

		watch:{
			// selected: function () {
			// 	console.log(this.selected.name)
			// }
		}
	}
</script>

<style lang="scss">
	header{		
		width: 100%;
		background: #fff;
		box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.1);

		.header-wrapper{
			max-width: 1140px;
			padding: 0px 15px;
			margin: 0px auto;
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

				.cities{
					//border: 1px solid;
					width: 100%;
					min-width: 204px;	
					background: #fff;	

					.vs__dropdown-toggle{
						border: none;

						.vs__selected{
							//padding: 0;
						}

						input{
							&::-webkit-input-placeholder{
								color: #ADADAD
							}
			
						}
					}

					.vs__dropdown-menu{
						border-radius: 4px;
						border: none;
						margin-top: 5px;
					}
					
				}	
			}

			// кнопка открыть-закрыть меню
			.btn-menu{
				//border: 1px solid;
				flex: none;
				width: 40px;
				height: 40px;
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;
				margin-right: -10px;

				img{
					width: 20px;
					height: 20px;
					display: block;
				}
			}

			.rigth-section{

				.btn-menu{
					margin-left: 50px;
				}

				.top-navigation{
					a{
						text-transform: uppercase;
						font-size: 14px;
						text-decoration: none;
						color: #000;
						letter-spacing: .5px;
					}
				}
			}
		}
	
		
		.right-menu{
			height: 100%;
			width: 350px;
			position: fixed;
			right: 0;
			top: 0;
			bottom: 0;
			z-index: 999;
			background: #fff;
			box-shadow: -3px 0px 5px 0px rgba(0,0,0,0.25);
			padding: 5px;
			padding-left: 30px;

			.topSection{
				display: flex;
				justify-content: flex-end;
				width: 100%;
				//border: 1px solid red;
				margin-bottom: 30px;

				.btn-menu{
					
				}
			}

			nav{
				display: flex;
				flex-direction: column;

				a{
					width: 100%;
					margin-bottom: 10px;
					padding: 5px 0;
					text-decoration: none;
					color: #000;
					font-size: 18px;
				}
			}
		}
	}
</style>
