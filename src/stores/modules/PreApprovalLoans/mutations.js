export default {
  setAboutYouDetails (state, param) {
    state.aboutYou = { ...state.aboutYou, ...param }
  },
  updateLoanData (state, loandata) {
    state.loandata = { ...state.loandata, ...loandata }
  },
  updateDependants (state, loandata) {
    state.loandata = { ...state.loandata, ...loandata }
  },
  setUserDetails (state, userData) {
    state.userData = { ...state.userData, ...userData }
  },
  setShowCalculator (state, data) {
    state.showCalculator = data
  },
  setEmploymentStatus (state, userEmploymentData) {
    state.userEmploymentData = { ...state.userEmploymentData, ...userEmploymentData }
  },
  setConfirmationData (state, confirmation) {
    state.confirmation = { ...confirmation }
  },
  setCurrentAddress (state, currentAddress) {
    state.addressDetails.currentAddress = { ...state.addressDetails.currentAddress, ...currentAddress }
  },
  setPreviousAddress (state, previousAddress) {
    state.addressDetails.previousAddress = { ...state.addressDetails.previousAddress, ...previousAddress }
  },
  setcloseSideNavBar (state, param) {
    state.toggleSideNav = param
  }
}
