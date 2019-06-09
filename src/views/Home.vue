<template>
	<div class="home">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="block-sorting">
						<select name="" id="">
							<option v-for="category in categoriesServices" v-bind:value="category.id">
								{{ category.name }}
							</option>
						</select>

						<select name="" id="">
							<option v-for="service in services" v-if="service.id_category == 3" v-bind:value="service.id_category">
								{{ service.name }}
							</option>
						</select>
					</div>
				</div>

				<div class="col-12" style="display: none">
					<div class="name-service">
						<h2>Замена тормозных дисков</h2>
						<h3>Найдено СТО: 13</h3>
					</div>
				</div>

				<div class="col-xl-3">
					{{servicesTest}}
				</div>

				<div class="col-xl-9">
					
					<div class="topServices">
						<div class="topServices-heading">
							<p>Популярные услуги</p>
						</div>
						
						<div class="topServices-list">
							<CardService :service="service" v-for="service in topServices"/>
						</div>
					</div>


					<div class="list-sto" style="display: none">
						<CardCarService :globalTime="globalTime" :carService="carService" v-for="carService in carServices"/>	
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
			globalTime: 0,
			servicesTest: "",

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

			categoriesServices: [
				{id: "1", name: "Платонове ТО"}, 
				{id: "3", name: "Кузовной ремон"},
			],

			services: [
				{id_category: "1", name: "Замена моторного масла"}, 
				{id_category: "1", name: "Замена ATF"}, 
				{id_category: "1", name: "Замена маслянного фильтра"}, 
				{id_category: "3", name: "Полировка"},
			],
		}
	},


	mounted() {
		this.$http
			.get('http://localhost:4000/services/all')
			.then(response => (this.servicesTest = response.data))
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
	},

	computed:{
		
	},

	created: function(){
		document.addEventListener("DOMContentLoaded", this.realTime);
	},
}

</script>

<style lang="scss">
	
</style>
