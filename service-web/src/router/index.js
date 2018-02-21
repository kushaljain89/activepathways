import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/views/LandingPage/landing-page.vue'
import Dashboard from '@/views/Dashboard/dashboard.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'landingpage',
      component: LandingPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})