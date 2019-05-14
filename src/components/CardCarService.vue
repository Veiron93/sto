<template>
	<div class="CardCarService">
		<div class="name">
			<a href="">{{service.name}}</a>
		</div>

		<div class="price">
			<p>от {{service.price}} руб.</p>
		</div>

		<div class="phone">
			<a href="tel:">{{service.phone}}</a>
		</div>

		<div class="map">
			<img src="@/assets/img/icons/map-balloon.svg" alt="">
		</div>

		<div class="time">
			<p>
				{{(dayOff)? 'закрыто' : 'до закрытия:'}}
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CardCarService',

		props: {
			service:{
				//type: Object
			} 
		},

		data() {
			return{
				nowDate: new Date(),
				dayOff: false,
				anotherTime: false,
				timeToClose: ""
			}
		},

		methods:{
			getTimeClose: function(){

				let days = this.service.schedule.days;
	
				if(this.dayOff != true){

					var day = this.nowDate.getDay();

					if(day == 0){
						day = 6;
					}	

					// проверка на выходной
					if(days[day].length == 0){
						this.dayOff = true;
					}else{

					}

					console.log()


					// days.forEach( (e) => {

					// 	console.log(e.length)

					// 	if(e.length == 0){
					// 		this.dayOff = true;
					// 	}
					// })
					
				}
			},

			getSchedule: function(){

				let exceptions = this.service.schedule.exceptions;

				// проверка есть ли исключения в режиме работы
				if(exceptions.length > 0){

					let nowDate = new Date();
					let day = nowDate.setHours(0, 0, 0, 0) / 1000;
					
					exceptions.forEach( (e) => {

						// df (day off) - не рабочий день 
						// at (another time) - другое время в определённый день 

						let typeExceptions = e.split('-')[0];

						if(typeExceptions == "df"){

							let dayOff = e.split('-')[1];
							
							if(dayOff == day){
								this.dayOff = true;
							}

						}else if(typeExceptions == "at"){
							
							let anotherTimeDate = e.split('-')[1];	
							//let anotherTimeTimeClose = e.split('-')[3];

							//let h = parseInt(this.nowDate.getHours() * 60);
							//let m = parseInt(this.nowDate.getMinutes());

							if(anotherTimeDate == day){
								this.anotherTime = true;
							}
						}
					});
				}
			},
		},

		mounted() {
			this.getSchedule();
			this.getTimeClose();
		},

		computed: {


			// getSchedule: function(){

			// 	let exceptions = this.service.schedule.exceptions;

			// 	for(var i=0; i < exceptions.length; i++){

			// 		// проверка на нерабочий день
			// 		if(exceptions[i].dayOff.length > 0){

			// 			if(this.today == exceptions[i].dayOff){
			// 				this.time = "close";

			// 			}	

			// 		}else{


			// 			// проверка на сокращенный день
			// 			if(exceptions[i].shortenedDay.length > 0){
			// 				(this.today == exceptions[i].shortenedDay)? this.shortenedDay = true : '';


			// 			}

			// 			// вычисление времени до закрытия
			// 			if(this.shortenedDay == true){




			// 			}else{
							
			// 				let dayWeek = moment().format("dddd");
			// 				let days = this.service.schedule.days;

			// 				//console.log(days)

			// 				days.forEach((element, index) => {



			// 					// проверка на выходной
			// 					if(index + 1 == moment().format("d")){

			// 						if(element.length > 0){
	
			// 							let date = new Date();
			// 							let closeTime = element.split('-')[1].split(':');

			// 							let nowHours = parseInt(date.getHours() * 60);
			// 							let nowMinutes = parseInt(date.getMinutes());

			// 							let closeHours = parseInt(closeTime[0] * 60);
			// 							let closeMinutes =  parseInt(closeTime[1]);

			// 							let diffMinutes = ((closeHours + closeMinutes) - (nowHours + nowMinutes));

			// 							if(diffMinutes > 0){

			// 								closeHours = Math.floor(diffMinutes / 60 % 24);
			// 								closeMinutes = Math.floor(diffMinutes % 60);

			// 								this.time = true;
			// 								this.timeLeft = `${(Math.floor(diffMinutes % 60) < 10)? '0': ''}${closeHours}:${(Math.floor(closeMinutes % 60) < 10)? '0': ''}${closeMinutes}`;
			// 							}else{
			// 								this.time = "close";
			// 							}

			// 						}else{
			// 							this.time = "close";
			// 						}
			// 					}
			// 				});
			// 			}
			// 		}
			// 	}
			// },

		},

		

		created: function(){

		},
	}
</script>

<style lang="scss">
	.CardCarService{
		//border: 1px solid red;
		height: 40px;
		border-radius: 4px;
  		border-radius: 4px;
  		box-shadow: 0px 1px 3.8px 0.2px rgba(0, 0, 0, 0.2);
  		background: #fff;

  		display: flex;
  		align-items: center;
  		justify-content: space-between;

  		margin-bottom: 15px;
  		padding: 0px 10px;

  		&:last-child{
  			margin-bottom: 0;
  		}

  		.name, .price, .phone,{
  			p, a{
  				color: #484848;
  			}
  		}

  		.name, .phone{
			a{
				text-decoration: none;
			}
		}

  		.price, .time{
  			p{
  				margin: 0;
  			}
  		}

  		.name{
  			border: 1px solid ;
  			width: 30%;

  			a{
  				font-weight: bold;
  				font-size: 16px;
  			}
  		}

		.price{
			border: 1px solid red;
			width: 120px;
			p{
				
			}
		}

		.phone{
			border: 1px solid red;
			width: 140px;
		}

		.map{
			padding: 0px 10px;
			cursor: pointer;
			img{
				height: 20px;
				display: block;
			}
		}

		.time{
			border: 1px solid red;
			width: 150px;
			
			p{
				text-transform: uppercase;
				font-size: 14px;
			}
		}
	}
</style>
