<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-sm-4 my-5 welcome-title">
				Welcome , {{ this.$store.state.store.user.name }}
			</div>
			<a href="#" @click.prevent="logout" class="button">Logout</a>
			<router-link :to='{name:"addSub"}' class="btn btn-primary button">Create Subject</router-link>
		</div>
		<table class="table bordered" style="border:1px solid;margin-top:45px;">
			<thead>
				<tr>
				<th scope="col">Sr no</th>
				<th scope="col">User Name</th>
				<th scope="col">Subject Name</th>
				</tr>
			</thead>
			<tbody v-for="(subject, index) in userSubject" :key="subject.id" :value="subject.id">
				<tr>
				<th scope="row">{{ index + 1 }}</th>
				<td>{{subject.user_name.name}}</td>
				<td>{{subject.subject_name.name}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name:'Dashboard',
  data(){
    return {
      user_subjects: this.$store.state.subject,
      user_id : this.$store.state.store.user.id 
    }
	},
  computed: mapGetters(['userSubject']),
  methods:{
	  logout(){
      this.$store
        .dispatch("logout")
        .then(() => this.$router.push({name :'login' }))
        .catch(err => console.log(err));
		}
	},
	async mounted () {
		const user_id = this.user_id
        this.$store
            .dispatch("getUserSubject",{ user_id })
            .then((response) => this.user_subjects = response )
            .catch(err => console.log(err));
    }
  }
</script>
<style scoped>
table, th, td {
  border: 1px solid;
  padding : 5px;
}
.button {
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
	margin: 15px 5px;

}
.welcome-title{
	margin-bottom: 25px;
}
</style>