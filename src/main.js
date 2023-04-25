import Vue from 'vue'
import App from './App.vue'
import { i18n } from './i18n'
import './vee-validate-config'
import 'bootstrap'

import './scss/main.scss'
import './resources/colors.scss'
import './resources/loader.scss'
import './resources/common.scss'
import '../src/resources/vue-carousal.scss'
import { router } from './routes/routes'
import { store } from './stores/index'
import { constants } from './resources/constants'

const VueAxe = process.env.NODE_ENV !== 'production' ? require('vue-axe').default : null

Vue.config.productionTip = false
if (VueAxe) {
  Vue.use(VueAxe, {
    allowConsoleClears: false
  })
}
Vue.prototype.$constants = constants
new Vue({
  router,
  store,
  render: h => h(App),
  i18n
}).$mount('#pre-approval-loans-widget')
