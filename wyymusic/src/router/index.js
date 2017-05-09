import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import myMusic from '@/components/myMusic'
import sideMore from '@/components/sideMore'

Vue.use(Router)

const router = new Router({
	routes: [{
		path: '/myMusic',
		component: myMusic
	}, {
		path: '/sideMore',
		component: sideMore
	}]
})

router.push('/myMusic');

export default router;