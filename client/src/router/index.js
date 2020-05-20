import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/playback',
    name: 'PlayBack',
    component: () => import(/* webpackChunkName: "playback" */ '../views/PlayBack.vue')
  },
  {
    path: '/visitsummary',
    name: 'VisitSummary',
    component: () => import(/* webpackChunkName: "visitsummary" */ '../views/VisitSummary.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
