import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import myMusic from '@/components/myMusic'
import findMusic from '@/components/findMusic'
import sideMore from '@/components/commom/sideMore'
import recommend from '@/components/recommend'
import songSheet from '@/components/songSheet'
import radioStation from '@/components/radioStation'
import musicRanking from '@/components/musicRanking'

Vue.use(Router)

const router = new Router({
	routes: [{
		path: '/myMusic',
		component: myMusic
	}, {
		path: '/sideMore',
		component: sideMore
	}, {
		path: '/findMusic',
		component: findMusic
	}, {
		path: '/findMusic/recommend',
		components: {
			default: findMusic,
			findMusic: recommend
		}
	}, {
		path: '/findMusic/songSheet',
		components: {
			default: findMusic,
			findMusic: songSheet
		}
	}, {
		path: '/findMusic/radioStation',
		components: {
			default: findMusic,
			findMusic: radioStation
		}
	}, {
		path: '/findMusic/musicRanking',
		components: {
			default: findMusic,
			findMusic: musicRanking
		}
	}]
})

router.push('/findMusic/recommend');

export default router;