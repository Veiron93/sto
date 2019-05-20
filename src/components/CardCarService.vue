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
			<img src="@/assets/img/icons/map-balloon.svg" alt="" title="Показать на карте">
		</div>

		<div class="time">
			<p>
				{{(dayOff)? 'закрыто' : 'до закрытия: ' + time}}
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
				anotherTimeShedule: null,
				time: ""
			}
		},

		methods:{

			// df (day off) - не рабочий день 
			// at (another time) - другое время в определённый день 

			// проверка на выходной
			checkDayOff: function(){
				let days = this.service.schedule.days;
	
				if(this.dayOff != true){

					let day = this.nowDate.getDay();

					day = (day == 0)? 6 : day - 1;

					if(days[day].length == 0){
						this.dayOff = true;
					}
				}
			},

			// проверка есть ли исключения в режиме работы
			exceptions: function(){

				let exceptions = this.service.schedule.exceptions;

				
				if(exceptions.length > 0){

					let nowDate = new Date();
					let day = nowDate.setHours(0, 0, 0, 0) / 1000;
					
					exceptions.forEach( (e) => {

						let typeExceptions = e.type;

						if(typeExceptions == "df"){

							let dayOff = e.date;
							
							if(dayOff == day){
								this.dayOff = true;
							}

						}else if(typeExceptions == "at"){
							
							let anotherTimeDate = e.date.split('-')[0];	
							

							if(anotherTimeDate == day){

								this.anotherTime = true;
								this.anotherTimeShedule = e.date.split('-')[2];

								//console.log(this.anotherTimeShedule)
							}
						}
					});
				}
			},

			timeToClose: function(){
				let days = this.service.schedule.days;
				let day = this.nowDate.getDay();
				let numberDay = (day == 0)? 6 : day - 1;

				if(days[numberDay].length != 0){

					let h = parseInt(this.nowDate.getHours() * 60);
					let m = parseInt(this.nowDate.getMinutes());

					if(this.anotherTime == true){
						var timeClose = this.anotherTimeShedule.split(':');

					}else{
						var timeClose = days[numberDay].split('-')[1].split(':');
					}

					let closeHours = parseInt(timeClose[0] * 60);
					let closeMinutes = parseInt(timeClose[1]);


					let diffTime = ((closeHours + closeMinutes) - (h + m));	

					if(diffTime > 0){

						closeHours = Math.floor(diffTime / 60 % 24);
						closeMinutes = Math.floor(diffTime % 60);

						this.time = `${(Math.floor(diffTime % 60) < 10)? '0': ''}${closeHours}:${(Math.floor(closeMinutes % 60) < 10)? '0': ''}${closeMinutes}`;
					}else{
						this.dayOff = true;
					}
				}
			},

			runTimeClose: function(){
				this.exceptions();
				this.checkDayOff();
				this.timeToClose();
			}
		},

		mounted() {
			this.runTimeClose();
		},

		computed: {

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
