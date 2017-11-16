import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodList from '@/views/GoodList.vue'
Vue.use(Router)
// console.log(GoodList);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodList',
      component: GoodList
    }
  ]
})
