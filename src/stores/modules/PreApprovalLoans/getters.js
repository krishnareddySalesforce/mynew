export default {
  getTitle (state) {
    return state.title
  },
  getAboutYouDetails (state) {
    return state.aboutYou
  },
  getLoanData (state) {
    return state.loandata
  },
  getUserDetail (state) {
    return state.userData
  },
  getShowCalculator (state) {
    return state.showCalculator
  },
  getEmploymentStatus (state) {
    return state.userEmploymentData
  },
  getLoanConfirmation (state) {
    return state.confirmation
  },
  getAddress  (state) {
    return state.addressDetails
  },
  getSideNav (state) {
    return state.toggleSideNav
  },
  getNavSelected (state) {
    return {
      navAccountSelected: state.navAccountsSelected,
      navProfileSelected: state.navProfileSelected
    }
  }
}
