<template>
	<div class="home">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="block-sorting">
						<select name="" id="">
							<option value="">Плановое ТО</option>
							<option value="">Кузовной ремон</option>
							<option value="">Электрика</option>
						</select>

						<select name="" id="">
							<option value="">Замена масла</option>
							<option value="">Замена АТФ</option>
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
						<span class="valueTime">{{test}}</span>
						<p @click="globalTime">запуск функции</p>
						{{api}}
					</div>

					<div class="list-sto">
						<CardCarService :service="service" v-for="service in services"/>	
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import axios from 'axios';

export default {

	data() {
		return{
			test: "",

			api: "",

			services: [
				{
					name: 'ГиперАвто', 
					price: "3500", 
					phone: '89146565789', 
					schedule: {
						days: ["10:00-18:00", "10:00-18:00", "10:00-18:00", "10:00-22:00", "10:00-18:00", "", "10:00-22:00"],
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
						days: ["11:00-23:00", "11:00-18:00", "11:00-18:00", "11:00-18:00", "11:00-18:00", "", ""],
						exceptions: [
							//{date: "1558270800", type: "df"},
							{id: "1", date: "1557671400", type: "df"},
							{id: "2", date: "1558270800-12:00-23:48", type: "at"},
							{id: "5", date: "1548270800-12:00-19:00", type: "at"},
						],
					}
				},
			]
		}
	},


	mounted() {
		axios
			.get('http://localhost:4000/cars/car/1')
      		.then(response => (this.api = response.data))
      		.catch(error => {
		        console.log(error);
		        this.errored = true;
		    })

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

				this.test = h + ":" + m + ":" + s;

				if(s == 59){
					//console.log('прошла минута')
				}

			}, 1000);
		},


		
	},

	created: function(){
		document.addEventListener("DOMContentLoaded", this.globalTime);
	},
}

</script>

<style lang="scss">
	.block-sorting{
		margin-top: 30px;
		border-radius: 4px;
		height: 50px;
		background: $accent;
		box-shadow: 0px 5px 13.92px 2.08px rgba(17, 127, 212, 0.35);
	}


	.name-service{
		margin-top: 20px;
		h2, h3{
			color: #ababab;
			margin: 0;
		}

		h2{
			font-size: 30px;
			margin-bottom: 8px;
		}

		h3{
			font-size: 16px;
		}
	}
</style>
