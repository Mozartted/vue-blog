<template>
	<div class="col-md-12">
		<div class="col-md-12" style="padding-top:200px">
			<div class="col-md-5 grid-centered">
			    <div class="col-md-12 centered white-text">
			        <h3>Login and Get Writing</h3>
			    </div>
			    <form @submit.prevent="loginUser()">
			        <div class="form-group">
			            <input class="form-control" name="email" placeholder="Enter Your Email" type="email" v-model="email"></input>
			        </div>
			        <div class="form-group">
			            <input class="form-control" name="password" placeholder="Enter Your Password" type="password" v-model="password"></input>
			        </div>
			        <div class="form-group">
			            <button class="vt-button--wide" type="submit">Login</button>
			        </div>
			    </form>
			</div>
		</div>
	</div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
	export default{
		data:function(){
			return {
				email:'',
				password:''
			}
		},
		methods:{
			...mapActions([
				'login'
			]),
			loginUser(){
				this.login({
					email:this.email,
					password: this.password
				})
			}
		}
	}
</script>