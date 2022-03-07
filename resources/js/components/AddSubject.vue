<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
               
                <div class="card-body">
                    <form @submit.prevent="create">
                         <div class="card-header">
                            <h4>Add Subject</h4>                    
                        </div>
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Subject</label>
                                    <select v-model="subject_id" class="form-control select my-5" required="true">
                                        <option>Select Subject</option>
                                        <option  v-for="sub in this.$store.state.subject.subjects" :key="sub.id" :value="sub.id">
                                            {{ sub.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary button">Save</button> 
                                <router-link :to='{name:"dashboard"}' class="btn btn-primary button">Back</router-link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"AddSubject",
    data(){
        return {
            subjects: this.$store.state.subject,
            subject_id: 0
        }
    },
    methods:{
        async create(){
            let subject = this.subject_id;
            let user_id = this.$store.state.store.user.id

            this.$store
              .dispatch("createSubject", { subject,user_id })
              .then(() => this.$router.push({name :'subject_list' }))
              .catch(err => console.log(err));
        },
    },
    mounted () {
        this.$store
            .dispatch("getSubjects")
            .then((response) => this.subjects = response )
            .catch(err => console.log(err));
    }
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

select {
    outline: 0;
    width: 100%;
    height: 100%;
    color: black;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 3px;
}
     
.select {
    position: relative;
    display: block;
    width: 100%;
    height: 3em;
    line-height: 3;
    overflow: hidden;
    border-radius: 0.25em;
    padding-bottom: 10px;
    margin-top: 10px;
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
select.form-control.select.my-5 {
    margin-bottom: 15px;
}
</style>