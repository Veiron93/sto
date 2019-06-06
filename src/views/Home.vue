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

				<div class="col-12">
					<div class="name-service">
						<h2>Замена тормозных дисков</h2>
						<h3>Найдено СТО: 13</h3>
					</div>
				</div>

				<div class="col-xl-3">
					
				</div>

				<div class="col-xl-9">
					<div class="globalTime">
						<!--<span class="valueTime">{{test}}</span>-->
						<pre>
							{{ info }}
						</pre>
						
					</div>

					<div class="list-sto">
						<CardCarService :test2="test2" :carService="carService" v-for="carService in carServices"/>	
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>




export default {
	name: 'home',

	data() {
		return{
			test: "",

			test2: 0,

			info: null,

			carServices: [
				{
					name: 'ГиперАвто', 
					price: "3500", 
					phone: '89146565789', 
					schedule: {
						days: ["10:00-18:00", "10:00-22:28", "10:00-18:00", "10:00-22:00", "10:00-18:00", "", "10:00-22:00"],
						exceptions: [
							{id: "7", date: "1557579600-10:00-14:00", type: "at"}
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
							//{date: "1558270800", type: "df"},
							{id: "1", date: "1557671400", type: "df"},
							{id: "2", date: "1558270800-12:00-23:48", type: "at"},
							{id: "5", date: "1548270800-12:00-19:00", type: "at"},
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

	components: {
		CardCarService: () => import('@/components/CardCarService.vue'),
	},

	methods: {
		globalTime: function () {
			//console.log(111)

			setInterval(() => {
				var d = new Date();
				var s = d.getSeconds();
				var m = d.getMinutes();
				var h = d.getHours();

				//this.test = h + ":" + m + ":" + s;

				if(s == 0){
					this.test2 += 1;
				}

			}, 1000);
		},



	},

	mounted() {
		this.$http
		.get('https://api.coindesk.com/v1/bpi/currentprice.json')
		.then(response => (this.info = response));
	},

	created: function(){
		document.addEventListener("DOMContentLoaded", this.globalTime);
	},
}

</script>

<style lang="scss">
	
</style>
