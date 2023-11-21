<template>
	<div class="container-fluid">
		<div class="window">
			<div class="header">
				<h5>Профиль</h5>
			</div>
			<div class="main">
				<div class="field">
					<div class="field_title">
						ID
					</div>
					<div class="field_content">
						{{user.id}}
					</div>
				</div>
				<div class="field">
					<div class="field_title">
						Логин
					</div>
					<div class="field_content">
						{{user.login}}
					</div>
				</div>
				<div class="field">
					<div class="field_title">
						Роль
					</div>
					<div class="field_content">
						{{user.role}}
					</div>
				</div>			
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ProfileUser',
		data() {
			return {
				user: {
					id: 1,
					login: "d200",
					role: "Администратор"
				}
			};
		}
	}
</script>

<style name="main" scoped>
	.container-fluid{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
	}
	.window{
		display: flex;
		flex-direction: column;
		width: 600px;
		aspect-ratio: 3 / 2;
		background-color: #A497D9;
		border-radius: 5px;
	}
	.window > .header{
		display: flex;
		flex-basis: 15%;
		justify-content: center;
		align-items: center;
		background-color: #8800FF;
		border-radius: 5px;
	}
	.window > .header > h5{
		margin: 4px 0px;
		user-select: none;
		color: white;
		font-weight: bold;
	}
	.window > .main{
		display: flex;
		flex-direction: column;
		flex-basis: 85%;
		height: 100%;
		margin: 4px;
	}
	.window > .main > .field{
		display: flex;
		flex-basis: 10%;
		color: #000000;
		background-color: #FFFFFF;
		margin: 5px;
		border: 2px solid black;
		user-select: none;
	}
	.window > .main > .field > .field_title{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-basis: 20%;
		text-align: center;
		font-weight: bold;
		border-right: 2px solid black;
	}
	.window > .main > .field > .field_content{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-basis: 80%;
		text-align: center;
	}
</style>