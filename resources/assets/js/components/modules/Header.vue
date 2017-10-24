<template>
 <div class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a target="_blank" href="/home" class="navbar-brand inner-nav--head-a">Simple Blog</a>
        </div>
        <div class="collapse navbar-collapse ">
            <form class="navbar-form form-inline" style="float: left;">
              <div class="input-group flex-disp dq-search--input" >
                <div class="id-1">
                  <i class="fa fa-search"></i>
                </div>
              </div>
            </form>
            <ul v-if="currentUser == null" class="nav navbar-nav navbar-right">
              <li class="nav-item"><router-link v-bind:to="'login'">Login</router-link></li>
              <li class="nav-item"><router-link v-bind:to="'signup'">Sign</router-link></li>
            </ul>
            <ul v-else class="nav navbar-nav navbar-right " style="padding:13px;">
              <li class="nav-item dq--nav dq--text-s">
                <router-link v-bind:to="'/admin/articles'">Admin</router-link>
              </li>
              <li class="nav-item dq--nav dq--text-s">
                <router-link v-bind:to="'/admin/new'">New Article</router-link>
              </li>
              <li class="nav-item dq--nav dq--text-s" @click="logout">
                <a href="">Logout</a>
              </li>
            </ul>
        </div>
    </div>
</div>

</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
  export default{
    data:function(){
      return {}
    },
    methods:{
      ...mapActions([
        'getUserDetails',
        'logout'
      ])
    },
    computed:{
      ...mapGetters({
        loggedInStatus:'loginStatus',
        currentUser:'currentUser'
      })
    },
    mounted(){
      console.log(this.$route.path)
      // when mounted check if the user is logged in and then proceed to query for the username if if the iser is logged in

    }
  }
</script>