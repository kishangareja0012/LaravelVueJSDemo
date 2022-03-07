<template>
	<div class="container" v-if="!this.$store.state.user">
		<div class="row justify-content-center">
			<div class="col-sm-4 mt-5">
				<form @submit.prevent="login">
					<h2>Login</h2>
					<div class="form-group">
						<label for="email">Email</label>
						<input type="email" class="form-control" v-model="email" required="true"/>
					</div>
					<div class="form-group">
						<label for="password">Password</label>
						<input type="password" class="form-control" v-model="password" required="true"/>
					</div>
					<button type="submit" class="btn btn-dark">Login</button>
				</form>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
export default{
	data() {
		return  {
			email: 'admin@gmail.com',
			password: '123456',
		};
	},
	methods: {
		login() {
            let email = this.email;
            let password = this.password;
            this.$store
              .dispatch("loginAction", { email, password })
              .then(() => this.$router.push({name :'dashboard' }))
              .catch(err => console.log(err));
          }
	},
}
</script>
<style scoped>
* {
	box-sizing: border-box;
}

body {
	background: #f6f5f7;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	height: 100vh;
}

button {
	border-radius: 20px;
	border: 1px solid #FF4B2B;
	background-color: #FF4B2B;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

.form-group{
	width: 100%;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: left;
	flex-direction: column;
	padding: 150px 50px;
	height: 100%;
	text-align: center;
	text-align: left;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

.container {
	background-color: #fff;
	border-radius: 10px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 468px;
	max-width: 100%;
	min-height: 480px;
}
</style>