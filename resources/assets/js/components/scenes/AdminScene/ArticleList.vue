<template>
	<div class="col-md-12 vt--no-pad top--padded">
		<div class="col-md-8 grid-centered top--padded">
			<div class="col-md-12">
				<router-link to="/admin/new"><button class="btn btn-success">New Article?</button></router-link>
				
			</div>
			<div v-if="articles" v-for="article in articles" class="col-md-12 vt--card dark-bg top--padded">
				<div class="col-md-12 vt--padding-articles">
					<div class="col-md-9">
						<h4 class="">{{article.title}}</h4>
					</div>
					<div class="col-md-3">
						<!-- <h4 class="">Articles 1</h4> -->
						<router-link :to="{ name: 'create', query: { id: article.id }}">
							<button class="btn btn-primary">Edit</button>
							</router-link>
							<button class="btn btn-danger" @click="deleteArt(article.id)" >Delete</button>
						
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
			}
		},
		methods:{
			...mapActions([
				'deleteArt',
				'get'
			]),
			getAllArticles:function(){
				this.get();
			},
		},
		computed:{
			...mapGetters([
				'articles'
			])
		},
		mounted:function(){
			this.getAllArticles();
			// var self = this
			// setTimeout(function(){
			// 	self.setArticleAsFirst()
			// },1000);
		}
	}
</script>