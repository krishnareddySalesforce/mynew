import Vue from 'vue'
import Vuex from 'vuex'

import preApprovalLoanModule from './modules/PreApprovalLoans/index'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    'pre-approval-loans': preApprovalLoanModule
  }
})
