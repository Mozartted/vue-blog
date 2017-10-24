import Vue from 'vue';
import Vuex from 'vuex';

import {AuthStore} from './AuthManage';
import {ArticleStore} from './ArticleManage';

Vue.use(Vuex);
Vue.config.debug = true;

export default new Vuex.Store({
	modules:{
		AuthStore,
		ArticleStore
	}
});