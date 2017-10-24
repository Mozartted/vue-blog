<template>
	<div class="col-md-12 vt--no-pad top--padded">
		<div class="col-md-8 grid-centered">
			<div class="col-md-12 top--margin-min">
				<button class="btn btn-success " @click="create({
					title:title,
					content:content,
					id:id
				})">Save Article?</button>
			</div>
			<div class="col-md-12 top--margin-min vt--no-pad">
				<!-- <button class="btn btn-success">Save Article?</button> -->
				<input class="vt--create-title" type="" name="" v-model="title">
			</div>

			<div class="col-md-12 vt--card">
				<medium-editor @edit="onEditingContent" :text="content"></medium-editor >
			</div>
		</div>
		
	</div>
</template>
<script>
import editor from 'vue2-medium-editor';
import swal from 'sweetalert';
import {mapActions, mapGetters} from 'vuex'
	export default{
		data:function(){
			return {
				title:"What's the dope Title",
				content:"Write a dope article, use this like you would use medium",
				id:null
			}
		},
		methods:{
			...mapActions([
				'create'
			]),
			onEditingContent:function(ev){
				// console.log(ev)
				// console.log(ev.event.target.innerHTML)
				this.content = ev.event.target.innerHTML
			},
			getArt:function(data){
				axios({
					url:'/api/v1/article/single/'+data,
					method:'get'
				}).then(res=>{
					// console.log(res);
					if(res.data.status == "success"){
						// store.commit(GET_ARTICLE, res.data.data);
						this.title  = res.data.data.title;
						this.content  = res.data.data.content;
						this.id = res.data.data.id;
					}
				})
			},
		},
		components: {
		    'medium-editor': editor
		},
		mounted(){
			if(this.$route.query.id != (null|| undefined)){
				// get the article from database
				this.getArt(this.$route.query.id);
			}
		}
	}
</script>
<style>
	.medium-editor-element{
		outline: none;
		min-height: 340px;
	}

	.vt--create-title{
		height: 50px;
		width: 100%;
		background: #ffffff;
		padding: 10px;
		border:none;
		/*margin: none;*/
		outline: none;
	}
</style>