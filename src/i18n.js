/* Config file for i18n plugin */

import Vue from 'vue'
import VueI18n from 'vue-i18n'

import es from 'vee-validate/dist/locale/es.json'
import en from 'vee-validate/dist/locale/en.json'
import liquidParser from './liquid/liquidParser'
import esLocales from './locales/es.json'
import enLocales from './locales/en.json'

Vue.use(VueI18n)

// Get page language from modyo, change to your needs
const LANG = liquidParser.parse('{{site.lang}}')

export const i18n = new VueI18n({
  locale: LANG,
  fallbackLocale: 'es',
  messages: loadLocaleMessages()
})

function loadLocaleMessages () {
  const messages = {}
  messages.es = {
    ...es.messages,
    ...esLocales
  }
  messages.en = {
    ...en.messages,
    ...enLocales
  }
  return messages
}
export default { i18n }
