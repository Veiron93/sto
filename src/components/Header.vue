<template>
	<header>
		<div class="header-wrapper">
			<div class="left-section">
				<div class="logo">
					<a href="/">
						<img src="@/assets/img/logo.png" alt="">
					</a>
				</div>

				<div class="header-cities">
					<div class="select-city">
						<p v-on:click="showHeaderCities">
							<img src="@/assets/img/icons/placeholder.svg" alt="">
							<span>Выберите город</span>
						</p>
					</div>

					<modal class="header-cities-popup" name="header-cities">

						<div class="top">
							<p>Выберите ваш город</p>
							<img src="@/assets/img/icons/close-gray.svg" v-on:click="hideHeaderCities" alt="Закрыть" title="Закрыть">
						</div>

						<div class="search">
							<input type="text" placeholder="Поиск">
						</div>

						<div class="hot-cities">
							<div class="item" v-for="hotCity in hotCities">
								<p>{{hotCity.name}}</p>
							</div>
						</div>

						<div class="list-cities">
							<div class="item"  v-for="city in cities">
								<p>{{city.name}}</p>
							</div>
						</div>
					</modal>
				</div>
			</div>

			<div class="rigth-section">
				<div class="top-navigation">
					<router-link to="/">Запросник</router-link>
					<router-link to="/">Автосервисы</router-link>
				</div>

				<div class="btn-menu" v-on:click="stateMenu = !stateMenu">
					<img v-if="!stateMenu" src="@/assets/img/icons/menu.svg" alt="">
					<img v-else src="@/assets/img/icons/close-menu.svg" alt="">
				</div>
			</div>
		</div>	

		<transition>
			<div class="hide-menu" v-show="stateMenu">
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
				hotCities: [
					{
						id: 1,
						name: 'Южно-Сахалинск'
					},
					{
						id: 2,
						name: 'Долинск'
					},
					{
						id: 3,
						name: 'Корсаков'
					},
				],
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
			showHeaderCities () {
				this.$modal.show('header-cities');
			},
			hideHeaderCities () {
				this.$modal.hide('header-cities');
			}
		},

		watch:{}
	}
</script>

<style lang="scss">
	header{		
		margin-bottom: 30px;
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

				.header-cities{
					//border: 1px solid red;
					height: 30px;
					width: 200px;
					display: flex;
					align-items: center;

					.select-city{
						p{
							margin: 0;
							font-size: 14px;

							display: flex;
							align-items: center;
							line-height: 1em;
							color: $accent;
							cursor: pointer;
							
							img{
								height: 14px;
								display: block;
								margin-right: 4px;
							}

							span{
								
							}
						}
					}

					// ВЫБОР ГОРОДА
					.header-cities-popup{

						.v--modal-background-click{

							.v--modal-box{
								max-width: 600px !important;
								height: 100% !important;
								padding: 20px;

								.top{
									margin-bottom: 30px;
									display: flex;
									align-items: center;
									justify-content: space-between;

									p{
										font-size: 14px;
										letter-spacing: 1px;
										margin: 0;
										font-weight: bold;
										line-height: 1em;
										text-transform: uppercase;
										color: #ADADAD;
									}
								
									img{
										height: 12px;
										display: block;
										cursor: pointer;
										transition: opacity .2s;

										&:hover{
											opacity: .8;
										}
									}
								}

								.search{
									input{
										border: 1px solid $gray;
										padding: 10px;
										width: 100%;
										border-radius: 4px;
										outline: none;
										height: 40px;

										background: url('../assets/img/icons/search.svg') no-repeat;
										background-size: 14px;
										background-position: center right 10px;
										
										&::-webkit-input-placeholder{
											color: #ADADAD;
										}
									}
								}

								.hot-cities{
									//border: 1px solid red;
									display: flex;
									flex-wrap: wrap;
									margin-top: 15px;
									margin-bottom: 20px;

									.item{
										border-radius: 4px;
										padding: 6px 10px;
										margin-right: 10px;
										margin-bottom: 10px;
										background: $accent;
										box-shadow: 0px 3px 8px 0px rgba(66, 186, 236, 0.3);
										cursor: pointer;
										transition: background .3s;

										&:last-child{
											margin-right: 0;
										}

										p{
											margin: 0;
											font-size: 14px;
											color: #fff;
										}

										&:hover{
											background: $accentHover;
										}
									}
								}

								.list-cities{
									//border: 1px solid red;

									.item{
										margin-bottom: 12px;
										p{
											margin: 0;
											font-size: 15px;
											cursor: pointer;
											transition: color .2s;

											&:hover{
												color: $accent;
											}
										}

										&:last-child{
											margin-bottom: 0;
										}
									}
								}
							}
						}
						
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
					margin-left: 40px;
					
					img{
						height: 14px;
					}
				}

				.top-navigation{
					a{
						text-transform: uppercase;
						font-size: 13px;
						text-decoration: none;
						letter-spacing: .5px;
						transition: .2s;
						margin-left: 20px;

						&:first-child{
							margin-left: 0;
						}

						&:hover{
							color: $accent;
						}
					}
				}
			}
		}
	
		
		.hide-menu{
			width: 100%;
			//border: 1px solid red;
			background: #fff;
			border-top: 1px solid #e2e2e2;

			nav{
				max-width: 1140px;
				margin: 0 auto;
				padding: 10px 15px;
				
				a{
					text-decoration: none;
					font-size: 16px;
					margin-right: 20px;
					transition: .2s;

					&:hover{
						color: $accent;
					}
				}
			}
		}
	}
</style>
