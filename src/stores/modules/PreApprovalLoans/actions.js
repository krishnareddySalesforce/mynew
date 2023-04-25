/// Actions for pre approval loan section

export default {
  addLoanData (context, payload) {
    context.commit('updateLoanData', payload)
  },

  addLoanAmount (context, payload) {
    context.commit('updateLoanData', payload)
    context.commit('setShowCalculator', true)
  },

  updateAboutYouData ({ commit }, payload) {
    commit('setAboutYouDetails', payload)
  },

  updateUserDetails ({ commit }, payload) {
    commit('setUserDetails', payload)
  },

  updateEmploymentStatus ({ commit }, payload) {
    commit('setEmploymentStatus', payload)
  },
  updateLoanConfirmation ({ commit }, payload) {
    commit('setConfirmationData', payload)
  },

  updateCurrentAddress ({ commit }, payload) {
    commit('setCurrentAddress', payload)
  },

  updatePreviousAddress ({ commit }, payload) {
    commit('setPreviousAddress', payload)
  },

  closeSideNav ({ commit }, payload) {
    commit('setcloseSideNavBar', payload)
  }
}
