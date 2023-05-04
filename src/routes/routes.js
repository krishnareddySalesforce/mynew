import Vue from 'vue'
import VueRouter from 'vue-router'

import liquidParser from '../liquid/liquidParser'
import HomePage from '../pages/HomePage.vue'
Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: liquidParser.parse('{{ vars["base-route"] }}'),
  // Routes that are used in the widgets
  routes: [
    { path: '/', component: HomePage }
  ]
})
