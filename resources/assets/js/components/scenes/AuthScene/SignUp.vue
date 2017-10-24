<template>
	<div class="col-md-12">
		<div class="col-md-12" style="padding-top:200px">
			<div class="col-md-5 grid-centered">
			    <div class="col-md-12 centered white-text">
			        <h3>Login and Writing</h3>
			    </div>
			    <form @submit.prevent="signUpUser()">
			        <div class="form-group">
			    	    <input class="form-control" name="name" placeholder="Enter Your Full Name" type="text" v-model="name" />
			    	</div>
			        <div class="form-group">
			            <input class="form-control" name="email" placeholder="Enter Your Email" type="email" v-model="email" />
			        </div>
			        <div class="form-group">
			            <input class="form-control" name="password" placeholder="Enter Your Password" type="password" v-model="password" />
			        </div>
			        <div class="form-group">
			    	    <input class="form-control" name="username" placeholder="Enter a really usable username" type="text" v-model="username" />
			    	</div>
			        <div class="form-group">
			            <input class="form-control" name="confirmation_password" placeholder="Confirm a password" type="password" v-model="confirm_password" />
			        </div>
			        <div class="form-group">
			            <button class="vt-button--wide" type="submit">Sign Up</button>
			        </div>
			    </form>
			    <div class="form-group">
			        <div class="col-md-12 flex-disp">
			            <div class="col-md-6"><a href=""></a>Already Sign In?</div>
			            <div class="col-md-6">Forgot Password</div>
			        </div>
			    </div>
			</div>
		</div>
	</div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
	export default{
		data:function(){
			return {
				name:'',
				email:'',
				username:'',
				password: '',
				confirm_password: ''
			}
		},
		methods:{
			...mapActions([
				'signup'
			]),
			signUpUser(){
				this.signup({
					email:this.email, 
					password: this.password,
					username:this.username,
					confirmpass: this.confirm_password,
					name: this.name
				})
			}
		}
	}
</script>