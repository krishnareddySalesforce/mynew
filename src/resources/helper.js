// common functions
export default {
  methods: {
    // common function for formatting currency
    formatCurrency (e, enteredValue) {
      // to restore the caret position
      var caret = e.target.selectionStart
      const element = e.target
      var key = e.keyCode || e.charCode
      const inputValue = e.target.value
      if (/[0-9]+(?:-[0-9]+)?(,[0-9]+(?:-[0-9]+)?)*/.test(inputValue)) {
        if (enteredValue && enteredValue.length > 0) {
          enteredValue = !enteredValue.includes(',')
            ? parseInt(enteredValue).toLocaleString().toString()
            : parseInt(enteredValue.split(',').join(''))
              .toLocaleString()
              .toString()
          enteredValue = enteredValue.replace(/[a-zA-Z&_\\.-]/, '')
        }
      } else {
        enteredValue = enteredValue.replace(/[a-zA-Z&_\\.-]/, '')
        e.preventDefault()
      }
      window.requestAnimationFrame(() => {
        if (key === 8 || key === 46 || key === 37 || key === 39) {
          if (enteredValue.length > 2 && enteredValue.length < 6 && enteredValue !== enteredValue.replaceAll(',', '') && enteredValue.length - enteredValue.replaceAll(',', '').length === 0 && key !== 37 && key !== 39) {
            caret = caret - 1
          }
          if ((key === 8 || key === 46) && enteredValue.length > 2 && enteredValue.length < 5) {
            if (caret === 3 || caret === 2) {
              caret = caret - 1
            }
          }
          if ((key === 8 || key === 46) && enteredValue.length > 4) {
            if (caret === 4 || caret === 3 || caret === 7 || caret === 6) {
              caret = caret - 1
            }
          }
          element.selectionStart = caret
          element.selectionEnd = caret
        } else {
          if (enteredValue.length > 5 && enteredValue !== enteredValue.replaceAll(',', '') && enteredValue.length - enteredValue.replaceAll(',', '').length >= 1 && key !== 37 && key !== 39) {
            caret = caret - 1
          }
          element.selectionStart = caret + (enteredValue.length - enteredValue.replaceAll(',', '').length)
          element.selectionEnd = caret + (enteredValue.length - enteredValue.replaceAll(',', '').length)
        }
      })
      return enteredValue
    },
    // common function for formatting postcode
    formatPostcode (postcode) {
      const val = postcode.trim().split(' ').filter(str => str !== '').join('')
      return val.slice(0, val.length - 3) + ' ' + val.slice(val.length - 3, val.length)
    }
  }
}
