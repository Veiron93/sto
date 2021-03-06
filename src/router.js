import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ListCarServices from './views/CarServices/ListCarServices.vue'
import Services from './views/Services.vue'
import Adv from './views/Adv.vue'
import About from './views/About.vue'
import Top from './views/Top.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/carservices',
      name: 'carservices',
      component: ListCarServices
    },

    {
      path: '/services',
      name: 'services',
      component: Services
    },

    {
      path: '/adv',
      name: 'adv',
      component: Adv
    },

    {
      path: '/about',
      name: 'about',
      component: About
    },

    {
      path: '/top',
      name: 'top',
      component: Top
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
