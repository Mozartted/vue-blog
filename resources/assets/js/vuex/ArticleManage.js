// ACTIONS
import {listArticle, createArticle, deleteArticle,signupUrl, vueAuth, getSingleArticle} from '../config';
import router from '../components/routes';
import swal from 'sweetalert';
// the types
const CREATE_ARTICLE = "CREATE_ARTICLE";
const DELETE_ARTICLE = "DELETE_ARTICLE";
const EDIT_ARTICLE = "EDIT_ARTICLE";
const SELECT_ARTICLE = "EDIT_ARTICLE";
const GET_ARTICLE = "GET_ARTICLE";

// actions
var actions = {
	create:function({commit, dispatch}, data){
		// login user and make them whole
		axios({
			url:createArticle,
			method:'post',
			data: data
		}).then(res=>{
			console.log(res);
			swal("Welldone",res.data.message,'success');
		})
	},

	getArticle:function(){

	},

	get:function({commit, dispatch}, data){
		axios({
			url:listArticle,
			method:'get'
		}).then(res=>{
			// console.log(res);
			if(res.data.status == "success"){
				commit(GET_ARTICLE, res.data.data);
			}
		})
	},

	deleteArt:function({commit, dispatch}, data){
		axios({
			url:deleteArticle+'/'+data,
			method:'delete'
		}).then(res=>{
			console.log(res);
			commit(DELETE_ARTICLE,data)
		})
	},
	setArticle:function({commit, dispatch}, data){
		commit(SELECT_ARTICLE,data)
	}
};

var getters = {
	articles: state=>{
		return state.articles;
	},
	current_article:state=>{
		return state.current_article;
	}
}

var mutations = {
	    [CREATE_ARTICLE] (state, payload){
	      _.concat(state.articles,payload)
	    },
	    [GET_ARTICLE] (state, payload) {
	      state.articles = payload
	    },
	    [DELETE_ARTICLE] (state, payload) {
	    	state.articles = _.reject(state.articles, {id: payload});
	    },
	    [SELECT_ARTICLE] (state, payload) {
	    	// state.isLoggedIn = true;
	    	state.current_article = _.find(state.articles,{id: payload})
	    }
	};

export const ArticleStore = {
	state: {
		articles:'',
		current_article:''
	},
	mutations: mutations,
	actions:actions,
	getters:getters
};

