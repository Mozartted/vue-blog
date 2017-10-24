<template>
        <div class="col-md-12 vt--no-pad">
                        <dq-header/>
                          <router-view></router-view>
                        <!-- <dq-footer/> -->
        </div>
</template>

<script>
import Header from './modules/Header';
import Foot from './modules/Foot';
    export default {
    	components:{
    		'dq-header': Header,
            'dq-footer': Foot
    	},
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
