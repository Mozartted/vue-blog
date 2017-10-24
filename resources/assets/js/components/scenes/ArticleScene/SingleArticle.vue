<template>
			<div v-if="article" class="col-md-9 ">
				<div class="col-md-12 vt--card">
					<h3 class="large--title" >{{article.title}}</h3>
					<div class="col-md-12" v-html="article.content">
					</div>
				</div>
			</div>
</template>
<script>
	export default{
		props:['article'],
		data:function(){
			return {

			}
		},
		methods:{

		}
	}
</script>