import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import myMusic from '@/components/myMusic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
			path: '/myMusic',
			component: myMusic
		},
  ]
})
