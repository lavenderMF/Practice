import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodList from '@/views/GoodList.vue'
import Cart from '@/views/Cart.vue'
import Address from '@/views/address.vue'
Vue.use(Router)
// console.log(GoodList);
export default new Router({
  routes: [
    {
		path: '/',
		name: 'GoodList',
		component: GoodList
    },
    {
    	path: '/cart',
    	name: 'Cart',
    	component: Cart
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    }
  ]
})
