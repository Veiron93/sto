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


export default {
	name: 'home',

	data() {
		return{
			test: "",

			services: [
				{
					name: 'ГиперАвто', 
					price: "3500", 
					phone: '89146565789', 
					schedule: {
						days: ["10:00-18:00", "10:00-18:00", "10:00-18:00", "10:00-18:00", "10:00-18:00", "", "10:00-22:00"],
						exceptions: ["at-1557579600-10:00-14:00"],
					}
				},

				{
					name: 'Мотор', 
					price: "2500", 
					phone: '84242678990', 
					schedule: {
						days: ["11:00-18:00", "11:00-18:00", "11:00-18:00", "11:00-18:00", "11:00-18:00", "", ""],
						exceptions: ["df-1557579600","df-1557671400", "at-1557579600-12:00-19:00"],
					}
				},

				// {
				// 	name: 'Мотор', 
				// 	price: "2500", 
				// 	phone: '84242678990', 
				// 	schedule: {
				// 		days: ["11:00-18:00", "11:00-18:00", "11:00-18:00", "11:00-18:00", "11:00-18:00", "", ""],
				// 		exceptions: [
				// 			{id: "1", dayOff: "1557579600", shortenedDay: ""},
				// 			{id: "3", dayOff: "", shortenedDay: "10:00-14:00"},
				// 		]
				// 	}
				// },
			]
		}
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
		}
	},

	created: function(){
		document.addEventListener("DOMContentLoaded", this.globalTime);
	},


	components: {
		CardCarService: () => import('@/components/CardCarService.vue'),
	}
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
