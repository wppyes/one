import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/test'
import Case from '@/components/Case'
import Yunying from '@/components/yunying'
import Quanjing from '@/components/quanjing'
import yunfuwu from '@/components/yunfuwu'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
	  if (savedPosition) {
	    return savedPosition
	  } else {
	    return { x: 0, y: 0 }
	  }
	},
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test, 
    },
    {
      path: '/case',
      name: 'Case',
      component: Case
    },
    {
      path: '/yunying',
      name: 'Yunying',
      component: Yunying
    },
    {
      path: '/quanjing',
      name: 'Quanjing',
      component: Quanjing
    },
    {
      path: '/yunfuwu',
      name: 'yunfuwu',
      component: yunfuwu
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
  ]
})

new Router({
	linkActiveClass: 'active'
});