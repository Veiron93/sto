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

				<!-- LEFT SIDE -->

				<div class="col-xl-3">
					<LeftSide/>	
				</div>


				<div class="col-xl-9">

					<!-- NEME SERVICE -->

					<div class="name-service" v-show="nameService.states">
						<h2>{{nameService.title}}</h2>
					</div>

					
					<!-- TOP SERVICES -->

					<div class="topServices" v-show="stateTopServices">
						<div class="topServices-heading">
							<p>🔥 Популярные услуги</p>
						</div>

						<div class="topServices-list">
							<CardService :top-service="topService" v-for="topService in topServices" :value="topService.value" :key="topService.value"/>
						</div>
					</div>


					<!-- LIST CARSERVICES -->

					<div class="listCarServices"  v-show="stateListCarServices">
						
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

			// Состояние элементов при загрузке
			stateTopServices: true,
			stateListCarServices: false,

			// ТОП услуг
			topServices: null,

			// время
			globalTime: 0,

			// выбранная категория услуг
			selectCategoryService: null,
			categoriesServices: [],
			
			// выбранная услуга
			selectService: null,
			services: null,
			

			// название выбранной услуги
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

	components: {
		CardCarService: () => import('@/components/CardCarService.vue'),
		CardService: () => import('@/components/CardService.vue'),
		LeftSide: () => import('@/components/LeftSide.vue'),
	},


	mounted() {
		this.$http
			.post('http://localhost:4000/services/top')
			.then(response => (this.topServices = response.data))
			.catch(() => {
				this.errored = true;
			});


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
		},
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
	},

	watch:{

		selectService: function () {

			if(this.stateTopServices == true){
				this.stateTopServices = false;
				this.stateListCarServices = true;
			}

			this.nameService.states = true;
			this.nameService.title = this.selectService.name;
		},
	},

	created: function(){
		document.addEventListener("DOMContentLoaded", this.realTime);
	},
}

</script>
