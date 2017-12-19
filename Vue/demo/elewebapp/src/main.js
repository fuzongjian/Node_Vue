// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'

import './common/stylus/index.styl'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
/* eslint-disable no-new */
const router = new VueRouter({
	mode: 'history',
	routes:[
		{
			path: "/",
			component: goods,
			redirect:"/goods"
		},
		{
			path: "/goods",
			component: goods
		},
		{
			path: "/ratings",
			component: ratings
		},
		{
			path: "/seller",
			component: seller
		}
	]
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
