<template>
	<div class="col-md-12 vt--no-pad top--padded">
		<div class="col-md-10 grid-centered top--padded">
			<div class="col-md-3 vt--card dark-bg top--padded ">
				<div  v-if="articles" v-for="article in articles" class="col-md-12 vt--padding-articles text-centered" @click="setArticle(article.id)">
					<h4 class="">{{article.title}}</h4>
				</div>
			</div>
			<single-article v-if="current_article" :article="current_article"/>
		</div>
	</div>
</template>
<script>
import SingleArticle from './SingleArticle.vue';
import {mapActions, mapGetters} from 'vuex';
export default{
	data:function(){
		return {

		}
	},
	components:{
		SingleArticle
	},
	methods:{
		...mapActions([
			'get',
			'setArticle'
		]),
		getAllArticles:function(){
			this.get();
		},
		setArticleAsFirst(){
			// var article = _.head(this.articles);
			// console.log(article);
			this.setArticle(this.first.id);
		}
	},
	computed:{
		...mapGetters([
			'articles',
			'current_article'
		]),
		first:function(){
			return _.head(this.articles)
		}
	},
	mounted:function(){
		this.getAllArticles();
		var self = this
		setTimeout(function(){
			self.setArticleAsFirst()
		},1000);
	}
}
</script>