
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// importing the vue library
import Vue from 'vue';

// importing the components
import App from './components/App';
import router from './components/routes';
import store from './vuex/store';
// import devqPlugins from './components/modules/devqPlugins';
// import BootstrapVue from 'bootstrap-vue';
// import VueAxios from 'vue-axios';
// import VueAuthenticate from 'vue-authenticate';
// import VueAgile from 'vue-agile';
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

if(document.querySelector('#main')){
	router.beforeEach((to, from, next)=>{
		var apiToken = localStorage.getItem('api_token');
		if((apiToken != null)){
			if((apiToken != "undefined")){
				// if api token is true and the route to is login not login
				// if its set
				window.axios.defaults.headers.common['Authorization'] = 'Bearer '+apiToken;
				store.dispatch('setUser');

				if(to.matched.some(record=>record.meta.forVisitors)){
					// if the route is for visitors, so user auth is not required
					if(store.getters.loginStatus){
						next({
							path:'/articles'
						});
					}else next();
				} else if(to.matched.some(record=>record.meta.forAuth)){
					// if the route is for authenticated, so user auth is not required
					if( ! store.getters.loginStatus){
						next({
							path:'/login'
						});
					}else next();
				}
				else next();
			}
		}else if(apiToken == null){
			if(to.matched.some(record=>record.meta.forVisitors)){
				// if the route is for visitors, so user auth is not required
				if(store.getters.loginStatus){
					next({
						path:'/articles'
					});
				}else next();
			} else if(to.matched.some(record=>record.meta.forAuth)){
				// if the route is for visitors, so user auth is not required
				if( ! store.getters.loginStatus){
					next({
						path:'/login'
					});
				}else next();
			}
			else next();
		} next();
	});


	// Vue.use(devqPlugins);
	// Vue.use(BootstrapVue);
	new Vue({
		el:'#main',
		router,
		store,
		components: {
			App
		}
	});
}
