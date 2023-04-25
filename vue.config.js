const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'es',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
})
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/resources/variables.scss";'
      }
    }
  }
}
