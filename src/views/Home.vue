<template>
	<div class="home">

		<div class="container">
			<div class="row">
				<div class="col-12">
					
					<div class="block-sorting">
						<v-select 
							v-model="selectCategoryService" 
							label="name"
							:clearable="optionSelectCategoryService.clearable" 
							:placeholder="optionSelectCategoryService.placeholder" 
							:options="categoriesServices">
						</v-select>

						<v-select 
							v-model="selectService" 
							label="name"
							:disabled="optionSelectSortingService.disabled" 
							:clearable="optionSelectSortingService.clearable" 
							:placeholder="optionSelectSortingService.placeholder" 
							:value="optionSelectSortingService.value"
							:options="sortingServices">
							<div slot="no-options">В данной категории пока нет услуг 😱</div>
						</v-select>

						<div class="search">
							<input type="text" placeholder="Поиск" >
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row">
				<div class="col-xl-3">
					<div class="left-side__index">
						<div class="links" v-on:click="showSections" v-show="!showTopServices">
							<p>🔥 Популярные услуги</p>
						</div>
					</div>
				</div>

				<div class="col-xl-9">
					<div class="name-service" v-show="nameService.states">
						<h2>{{nameService.title}}</h2>
					</div>

					<div class="topServices" v-show="showTopServices">
						<div class="topServices-heading">
							<p>🔥 Популярные услуги за неделю</p>
						</div>

						<div class="topServices-list">
							<CardService :top-service="topService" v-for="topService in getTopServices" :value="topService.value" :key="topService.value"/>
						</div>
					</div>

					<div class="listCarServices"  v-show="showListCarServices">
						
						<div class="countCarServices">
							<p>Найдено СТО: 13</p>
						</div>

						<CardCarService :globalTime="globalTime" :carService="carService" v-for="carService in carServices" :value="carService.value" :key="carService.value"/>	
					</div>
				</div>
			</div>
		</div>
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
			
			selectCategoryService: null,
			categoriesServices: [],

			nameService: {
				states: false,
				title: "",
			},

			optionSelectCategoryService: {
				placeholder: "Выберите категорию",
				clearable: false,
			},

			optionSelectSortingService: {
				placeholder: "Выберите услугу",
				clearable: false,
				disabled: true,
				value: null
			},

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
			.catch(() => {
				this.errored = true;
			});

		this.$http
			.get('http://localhost:4000/services/categories/all')
			.then(response => (this.categoriesServices = response.data))
			.catch(() => {
				this.errored = true;
			});	
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
				//var m = d.getMinutes();
				//var h = d.getHours();

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

				this.nameService.states = false;
				this.nameService.title = "";
			}
		}
	},

	computed:{
		sortingServices: function () {

			if(this.selectCategoryService != null ){

				let idCategoryServices = this.selectCategoryService.id;
				let arr = [];

				this.services.forEach(function(e){
					if(e.id_category == idCategoryServices){
						return arr.push(e);
					}				
				})

				if(arr.length > 0){
					this.optionSelectSortingService.disabled = false;
				}

				return arr;
			}
				
			return [];
		},

		getTopServices: function (){

			if(this.services != null){

				let services = this.services;

				const filteredServices = services.filter(service => service.countViewWeek != 0);

				filteredServices.sort(function(a, b){
					return b.countViewWeek-a.countViewWeek
				})

				filteredServices.splice(15);

				return filteredServices;
			}
			
			return null;
		}
	},

	watch:{

		selectService: function () {

			if(this.showTopServices == true){
				this.showTopServices = false;
				this.showListCarServices = true;
			}

			this.nameService.states = true;
			this.nameService.title = this.selectService.name;
		},

		selectCategoryService: function () {

			//console.log(this.selectCategoryService.id)
		}
		
	},

	created: function(){
		document.addEventListener("DOMContentLoaded", this.realTime);
	},
}

</script>
