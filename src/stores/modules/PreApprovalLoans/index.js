import loanGetters from './getters'
import loanActions from './actions'
import loanMutations from './mutations'

/// Store for pre approval loan section
export default {
  state () {
    return {
      aboutYou: {
        dob: '',
        mobileNumber: null,
        homeNumber: null
      },
      loandata: {
        loanamount: '',
        enteredloanvalue: '',
        loantenure: '',
        loanpurpose: '',
        totalAmount: '',
        totalInterest: '',
        monthlyPayment: '',
        noOfDependants: '',
        yourIncome: '',
        householdIncome: '',
        expenditureAmount: '',
        enteredExpenditureAmount: ''
      },
      userData: {
        email: '',
        firstName: '',
        lastName: ''
      },
      userEmploymentData: {
        employmentStatus: '',
        occupation: ''
      },
      confirmation: {
        checkbox1: '',
        checkbox2: ''
      },
      showCalculator: false,
      addressDetails: {
        currentAddress: {
          address: {
            postcode: '',
            yourAddress: '',
            addressLine1: '',
            addressLine2: '',
            addressLine3: '',
            city: ''
          },
          residentialStatus: '',
          yearsLived: '',
          isManuallyEntered: false
        },
        previousAddress: {
          address: {
            postcode: '',
            yourAddress: '',
            addressLine1: '',
            addressLine2: '',
            addressLine3: '',
            city: ''
          },
          residentialStatus: '',
          yearsLived: ''
        }
      },
      toggleSideNav: false
    }
  },
  getters: loanGetters,
  actions: loanActions,
  mutations: loanMutations
}
