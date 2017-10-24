import Vue from 'vue';
import Router from 'vue-router';
import ArticleList from './scenes/AdminScene/ArticleList.vue';
import CreateArticle from './scenes/AdminScene/CreateArticle.vue';
import Articles from './scenes/ArticleScene/Articles.vue';
import SingleArticle from './scenes/ArticleScene/SingleArticle.vue';
import Login from './scenes/AuthScene/Login.vue';
import SignUp from './scenes/AuthScene/SignUp.vue';
import Error from './scenes/Error.vue';
// setting up vue router to useArtic
Vue.use(Router);

// setting up router'
const routes = [
	{
		path: '/', 
		component: Articles
	},
	{
		path: '/login', 
		component: Login,
		meta:{
			forVisitors:true
		}
	},
	{
		path: '/signup', 
		component: SignUp,
		meta:{
			forVisitors:true
		}
	},
	{
		path: '/article/topic', 
		component: SingleArticle,
		meta:{
			forVisitors:true
		}
	},{
		path: '/admin/articles', 
		component: ArticleList,
		name: 'articles',
		meta:{
			forAuth:true
		}
	},{
		path: '/admin/new', 
		component: CreateArticle,
		name:'create',
		meta:{
			forAuth:true
		}
	},
	{
		path: '/*', 
		component: Error,
		name:'error'
	},
];

const router = new Router({
	routes:routes,
	base: '/',
	mode: 'history',
	history:true
});

export default router;
