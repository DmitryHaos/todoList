<template>
	<nav class="navbar">
		<div class="nav-container">
			<div class="nav-column">
				<router-link to="/todos" class="nav-row">
					Списки дел
				</router-link>
			</div>
		</div>
		<div class="nav-container">
			<div class="nav-column">
				<router-link to="/profile" class="nav-row">
					{{ user.login }}
				</router-link>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: "NavBar",
		data() {
			return {
				user: {
					id: 1,
					login: "d200",
					role: "Администратор"
				}
			};
		}
	};
</script>

<style name="main" scoped>
	.navbar{
		display: flex;
		justify-content: space-between;
		background-color: #AAFFAA;
		padding: 2vmin 0;
	}
	.navbar > .nav-container{
		display: flex;
		margin: 0 1vmin;
	}
	.navbar > .nav-container > .nav-column{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 2vmin;
	}
	.navbar > .nav-container > .nav-column > :first-child{
		padding-top: 0 !important;
	}
	.navbar > .nav-container > .nav-column > :last-child{
		padding-bottom: 0 !important;
	}
	.navbar > .nav-container > .nav-column > .nav-row{
		color: #0000AA;
		font-weight: bold;
		font-size: 2.1vmin !important;
		text-decoration: none;
		background: none;
		border: none;
		padding: 0.2vh 0;
		user-select: none;
	}
	.navbar > .nav-container > .nav-column > .nav-row:hover{
		color: #FF7700;
	}
	.navbar > .nav-container > .nav-column > .nav-row:active{
		border: 0px solid rgba(0, 0, 0, 0);
	}
</style>

<style name="custom" scoped>
	.nav-active-link{
		color: #FF0000 !important;
	}
</style>