<template>
	<div class="home">

		<v-container>
			<v-layout row wrap>
				<v-flex xs12>
					<div class="block-sorting">
						<v-autocomplete 
							v-model="selectCategoryService" 
							:items="categoriesServices"  
							item-text="name"
							item-value="id"
							label="Категория"
							outline/>

						<v-autocomplete 
							v-model="selectService" 
							:items="sortingServices"  
							item-text="name"
							item-value="id"
							label="Услуга"
							no-data-text="В данной категории пока нет услуг 😱"

							:disabled="stateSelectService"
							outline/>
					</div>
				</v-flex>

				<v-flex xs12 style="display: none">
				  <div class="name-service">
						<h2>Замена тормозных дисков</h2>
						<h3>Найдено СТО: 13</h3>
					</div>
				</v-flex>
			</v-layout>

			<v-layout row wrap>

				<v-flex xs12 sm3 md3>
					<div class="left-side__index">
						<div class="links" v-on:click="showSections" v-show="!showTopServices">
							<p>🔥 Популярные услуги</p>
						</div>
					</div>
				</v-flex>

			  
				<v-flex>
					<div class="topServices" v-show="showTopServices">
						<div class="topServices-heading">
							<p>🔥 Популярные услуги за неделю</p>
						</div>
							
						<div class="topServices-list">
							<CardService :top-service="topService" v-for="topService in getTopServices"/>
						</div>
					</div>			


					<div class="list-sto"  v-show="showListCarServices">
						<CardCarService :globalTime="globalTime" :carService="carService" v-for="carService in carServices"/>	
					</div>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>

export default {

	data() {
		return{
			showTopServices: true,
			showListCarServices: false,
			globalTime: 0,
			selectService: null,
			services: null,
			stateSelectService: true,
			selectCategoryService: null,
			categoriesServices: null,

			carServices: [

				{
					name: 'ГиперАвто', 
					price: "3500", 
					phone: '89146565789', 
					schedule: {
						days: ["10:00-18:00", "10:00-22:28", "10:00-18:00", "10:00-22:00", "10:00-18:00", "10:00-18:00", "10:00-22:00"],
						exceptions: [
							{date: "1557579600-10:00-14:00", type: "at"}
						],
					}
				},

				{
					name: 'Мотор', 
					price: "2500", 
					phone: '84242678990', 
					schedule: {
						days: ["11:00-23:00", "11:00-22:25", "11:00-24:00", "11:00-18:00", "11:00-18:00", "", ""],
						exceptions: [
							{date: "1557671400", type: "df"},
							{date: "1558270800-12:00-23:48", type: "at"},
							{date: "1548270800-12:00-19:00", type: "at"},
						],
					}
				},
			],
		}
	},


	mounted() {
		this.$http
			.get('http://localhost:4000/services/all')
			.then(response => (this.services = response.data))
			.catch(error => {
				console.log(error);
				this.errored = true;
			})

		this.$http
			.get('http://localhost:4000/services/categories/all')
			.then(response => (this.categoriesServices = response.data))
			.catch(error => {
				console.log(error);
				this.errored = true;
			})
	},

	components: {
		CardCarService: () => import('@/components/CardCarService.vue'),
		CardService: () => import('@/components/CardService.vue'),
	},

	methods: {
		realTime: function () {
			setInterval(() => {
				var d = new Date();
				var s = d.getSeconds();
				var m = d.getMinutes();
				var h = d.getHours();

				if(s == 0){
					this.globalTime += 1;
				}

			}, 1000);
		},

		showSections: function(){
			if(this.showTopServices == true){
				this.showTopServices = false;
				this.showListCarServices = true;
			}else{
				this.showTopServices = true;
				this.showListCarServices = false;
			}
		}
	},

	computed:{
		sortingServices: function () {

			if(this.services != null){

				let idCategoryServices = this.selectCategoryService;
				let arr = [];

				this.services.forEach(function(e){
					if(e.id_category == idCategoryServices){
						return arr.push(e);
					}				
				})

				if(arr.length > 0){
					this.stateSelectService = false;
				}

				return arr;
			}	
		},

		getTopServices: function(){

			if(this.services != null){

				let services = this.services;

				const filteredServices = services.filter(service => service.countViewWeek != 0);

				filteredServices.sort(function(a, b){
					return b.countViewWeek-a.countViewWeek
				})

				filteredServices.splice(15);

				return filteredServices;
			}
		}
	},

	watch:{

		selectService: function () {

			if(this.showTopServices == true){
				this.showTopServices = false;
				this.showListCarServices = true;
			}
		}
		
	},

	created: function(){
		document.addEventListener("DOMContentLoaded", this.realTime);
	},
}

</script>
