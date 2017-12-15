// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'

import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
/* eslint-disable no-new */
const router = new VueRouter({
	mode: 'history',
	routes:[
		{
			path: '/',
			component: IndexPage
		},
		{
			path: '/detail',
			component: DetailPage,
			redirect: '/detail/analysis',
			children:[
				{
					path: 'forecast',
					component: DetailForPage
				},
				{
					path: 'analysis',
					component: DetailAnaPage
				},
				{
					path: 'publish',
					component: DetailPubPage
				},
				{
					path: 'count',
					component: DetailCouPage
				}
			]
		}
	]
})
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
