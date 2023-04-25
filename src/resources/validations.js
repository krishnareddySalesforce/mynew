// conatins all the validation usedin the application validations
import { i18n } from '@/i18n'
import moment from 'moment'
export default {
  methods: {
    // User Name validation Regex
    validateUserName (name) {
      return /^[a-zA-Z\s]+$/.test(name)
    },
    // email validation
    validateEmail (email) {
      return /^\s*(([^<>()[\]\\.,;:\s@/"]+(\.[^<>()[\]\\.,;:\s@/"]+)*)|(\/".+\/"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/.test(email)
    },
    // loan amount validation
    validateLoanAmount (loanAmount) {
      const isMoreAmount = 'moreAmount'
      const isLessAmount = 'lessAmount'
      const validAmount = 'validAmount'
      if (loanAmount > 8000 && loanAmount.length > 0) {
        return isMoreAmount
      }
      if (loanAmount < 1000 && loanAmount.length > 0) {
        return isLessAmount
      }
      if (loanAmount <= 8000 && loanAmount >= 1000) {
        return validAmount
      }
    },
    // expenditure amount validation
    validateExpenditureAmount (amount) {
      if (amount > 0 && amount.length > 0 && amount.length <= 7) {
        return true
      }
    },
    // date of birth validation
    validateDob (val) {
      if (moment(val, 'DD/MM/YYYY', true).isValid()) {
        const dob = moment(val, 'DD/MM/YYYY')
        const date = moment(new Date(), 'DD/MM/YYYY')
        const diff = moment.duration(date.diff(dob)).asYears()
        if (diff > 0) {
          if (diff >= 18) { // check for age group
            if (diff > 130) { // age greater than 130
              return { isValid: false, errorMessage: i18n.t('AGE_EXCEEDED_ERROR_MESSAGE') }
            } else { // accepted age group
              return { isValid: true, errorMessage: '' }
            }
          } else { // age less than 18 years
            return { isValid: false, errorMessage: i18n.t('MINIMUM_AGE_ERROR_MESSAGE') }
          }
        } else {
          return { isValid: false, errorMessage: i18n.t('FUTURE_DATE_ERROR_MESSAGE') }
        }
      } else { // invalid date format
        return { isValid: false, errorMessage: i18n.t('INVALID_DATE_ERROR_MESSAGE') }
      }
    },
    // validate mobile number
    validateMobileNumber (mobileNumber) {
      if (mobileNumber !== '' && mobileNumber !== null && /[0-9]+(?:-[0-9]+)?([0-9]+(?:-[0-9])?)*/.test(mobileNumber)) {
        const regex = /^(?:07)(\d){3} ?(?:\d\s?){5,6}$/.test(mobileNumber)
        return regex
      } else {
        return true
      }
    },
    // validate home number
    validateHomeNumber (homeNumber) {
      if (homeNumber !== '' && homeNumber !== null && /[0-9]+(?:-[0-9]+)?([0-9]+(?:-[0-9])?)*/.test(homeNumber)) {
        const regex = /^(?:01|02|03)(\d){3} ?(?:\d\s?){5,6}$/.test(homeNumber)
        return regex
      } else {
        return true
      }
    },
    // validate income details (your income & household income)
    validateIncomeDetails (income) {
      if (income && income.toString().length > 0 && /[0-9]+(?:-[0-9]+)?(,[0-9]+(?:-[0-9]+)?)*/.test(income)) {
        if (income.toString().length > 9) {
          return {
            isIncomeValid: false,
            isFormValid: false
          }
        } else {
          return {
            isIncomeValid: true,
            isFormValid: true
          }
        }
      } else {
        return {
          isIncomeValid: true,
          isFormValid: false
        }
      }
    },
    // validate postcode
    validatePostcode (postcode) {
      const regex = /^[A-Z]{1,2}\d{1,2}[A-Z\d]? ?\d[A-Z]{2} *?$/
      return regex.test(postcode.toUpperCase())
    },
    // validate occupation details
    validateOccupationDetails (occupation) {
      return /^[a-zA-Z0-9\s]*$/.test(occupation)
    }
  }
}
