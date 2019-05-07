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

					<div class="list-sto">
						
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'home',
	components: {
		
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
