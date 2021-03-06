// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import VueAwesomeSwiper from 'vue-awesome-swiper'

axios.defaults.withCredentials = true;

Vue.use(VueAwesomeSwiper);
Vue.use(Vuex);

const  vuex_store = new Vuex.Store({
    state:{
		userProfile: {},
        uid: '',
        songId: ''
    },
    getters: {
	    songId: state => {
	      return state.songId
	    }
	}
})

Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: vuex_store,
  template: '<App/>',
  components: { App }
})
