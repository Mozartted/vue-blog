// ACTIONS
import {loginUrl, clientId, clientSecret, getUser, signupUrl, vueAuth} from '../config';
import router from '../components/routes';
import swal from 'sweetalert';
// the types
const LOGIN = "LOGIN";
const SIGNUP = "SIGNUP"
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
const LOGOUT = "LOGOUT";
const SET_USER = "SET_USER";

// actions
var actions = {
	login:function({commit, dispatch}, data){
		// login user and make them whole
		const postData = {
			grant_type :'password',
			client_id:clientId,
			client_secret:clientSecret,
			username:data.email,
			password:data.password,
			scope:'*'
		};

		axios({
			url:loginUrl,
			method:'post',
			data:postData
		}).then((res)=>{
			// the response
			// once logged in create a new access header 
			console.log(res);
			if(res.status == "401"){
				swal("opps",res.data.message,'error');
			}else{
				if((res.data.access_token !== null) || (res.data.access_token !== undefined )){
					axios.defaults.headers.common['Accept'] = 'application/json';
					axios.defaults.headers.common['Authorization'] = 'Bearer '+res.data.access_token;
				}
				localStorage.setItem('api_token', res.data.access_token);
				localStorage.setItem('refresh_token', res.data.refresh_token);
				dispatch('getUserDetails');
				commit(LOGIN_SUCCESS);
				router.push('/admin/articles');
			}
		}).catch(err=>{
			if(err.response.status == "401"){
				swal("opps",err.response.data.message,'error');
			}
		});
	},
	signup:function({commit, dispatch}, data){
		// login user and make them whole
		const postData = {
			email:data.email,
			password:data.password,
			username:data.username,
			name:data.name,
			password_confirmation:data.confirmpass
		};

		axios({
			url:signupUrl,
			method:'post',
			data:postData
		}).then((res)=>{
			// the response
			// once logged in create a new access header 
			console.log(res);
			if((res.data.access_token !== null) || (res.data.access_token !== "undefined" )){
				axios.defaults.headers.common['Accept'] = 'application/json';
				axios.defaults.headers.common['Authorization'] = 'Bearer '+res.data.access_token;
				localStorage.setItem('api_token', res.data.access_token);
				// localStorage.setItem('refresh_token', res.data.refresh_token);
				dispatch('getUserDetails');
				commit(SIGNUP_SUCCESS);
				router.push('/admin/articles');
			}
		});
	},
	logout:function(){
		localStorage.removeItem('api_token');
		commit(LOGOUT);
		router.push('/');
	},
	setUser:function({commit, dispatch}){
		axios.defaults.headers.common['Accept'] = 'application/json';
		axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('api_token');
		dispatch('getUserDetails');
		commit(LOGIN_SUCCESS);
	},
	getUserDetails:function({commit}){
		window.axios.get('/api/v1/user').then(res=>{
			console.log(res);
			commit(SET_USER,res.data);
		});
	}
};

var getters = {
	loginStatus: state=>{
		return state.isLoggedIn;
	},
	currentUser:state=>{
		return state.currentUser;
	}
}

var mutations = {
	    [LOGIN] (state) {
	      state.pending = true;
	    },
	    [LOGIN_SUCCESS] (state) {
	      state.isLoggedIn = true;
	      state.pending = false;
	    },
	    [SIGNUP_SUCCESS] (state) {
	    	state.isLoggedIn = true;
	    	state.pending = false;
	    },
	    [LOGOUT](state) {
	    	state.currentUser = null;
	      state.isLoggedIn = false;
	    },
	    [SET_USER](state,payload){
	    	state.currentUser = payload;
	    }
	};

export const AuthStore = {
	state: {
		isLoggedIn: false,
		currentUser: null
	},
	mutations: mutations,
	actions:actions,
	getters:getters
};

