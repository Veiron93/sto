<template>
	<div class="top">


		<div class="container">
			<div class="row">

				<!-- LEFT SIDE -->

				<div class="col-xl-3">
					<LeftSide/>	
				</div>


				<div class="col-xl-9">

					<!-- TOP SERVICES -->

					<div class="topServices">
						<div class="topServices-heading">
							<p>🔥 Популярные услуги</p>
						</div>

						<div class="topServices-list">
							<CardService :top-service="topService" v-for="topService in topServices" :value="topService.value" :key="topService.value"/>
						</div>
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
			// ТОП услуг
			topServices: null,
		}
	},

	components: {
		CardCarService: () => import('@/components/CardCarService.vue'),
		LeftSide: () => import('@/components/LeftSide.vue'),
	},

	mounted() {
		this.$http
			.post('http://localhost:4000/services/top')
			.then(response => (this.topServices = response.data))
			.catch(() => {
				this.errored = true;
			});
	},

	methods: {

	},

	computed:{

	},

	watch:{

	},

	created: function(){
		
	},
}

</script>
