import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../pages/HomePage.vue'
Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  // Routes that are used in the widgets
  routes: [
    { path: '/', component: HomePage }
  ]
})
