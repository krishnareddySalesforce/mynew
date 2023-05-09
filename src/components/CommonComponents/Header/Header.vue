<template>
<div class="header-container bg-mirage">
  <header :class="{'blurred-background': getSideNav === true}" >
    <div class="header-logo">
      <a @click=redirectToHome>
        <img src="https://d3s87pah5oatx.cloudfront.net/uploads/3c23e6e5-1388-4b38-98c6-7db2f600f661/original/C1_LOGO_PRIMARY_BLUE_RED_CMYK_NOREG_1.svg" alt="Dynamic Bank" class="dynamic-bank-logo" />
      </a>
      <img
        src="https://d3s87pah5oatx.cloudfront.net/uploads/4d6d3ad8-1492-4a51-ace4-58bbd50c75fa/original/hamburgermenu.svg"
        alt="Hamburger menu"
        @click.stop="showSideNavBar"
        class="mobile-view"
      />
      <div class="desktop-account-types-container white">
        <div  class='desktop-account-types' v-for="accounts in $constants.accountTypes" :key="accounts.id" @click="navigateTo(accounts)" :class="{'active': getNavSelected().navAccountSelected === accounts.id }">
          <label class="account-types">{{accounts.accountType}}</label>
        </div>
      </div>
      <div class="desktop-about-company-container white">
          <div class="desktop-about-company" v-for="options in $constants.companyProfile" :key="options.id" @click="navigateToProfile(options)" :class="{'active': getNavSelected().navProfileSelected === options.id }">
            <div class="desktop-about-company-element">
              <img class="accounts-logo" alt="accounts-logo" :src='options.desktopLogo' />
              <label class='about-company'>{{options.option}}</label>
            </div>
          </div>
        </div>
      <div class='login-container white'>
          <div class="logout" v-if="userLoggedIn">
              <span class="account-txt">{{ $t("LOGOUT") }}</span>
          </div>
          <div class="login" v-if="!userLoggedIn">
              <span class="account-txt">{{ $t("LOGIN") }}</span>
          </div>
      </div>
  </div>
  </header>
  <div class="sidenav-container bg-white" v-if="getSideNav">
    <side-nav />
  </div>
</div>
</template>

<script>
import SideNav from '../SideNav/SideNav.vue'
import { mapGetters, mapActions } from 'vuex'
import liquidParser from '../../../liquid/liquidParser'
export default {
  name: 'HeaderComponent',
  components: { SideNav },
  data () {
    return {
      showSideNav: false,
      userLoggedIn: false
    }
  },
  methods: {
    ...mapActions(['closeSideNav', 'updateAccountNavSelected', 'updateProfileNavSelected']),
    ...mapGetters(['getNavSelected']),
    redirectToHome () {
      const accountUrl = liquidParser.parse('{{site.url}}')
      window.location.href = `${accountUrl}`
      // this.$router.push('/')
    },
    showSideNavBar () {
      this.closeSideNav(true)
    },
    navigateTo (selectedValue) {
      this.updateAccountNavSelected(selectedValue.id)
      if (selectedValue.route) {
        const accountUrl = liquidParser.parse('{{site.url}}')
        window.location.href = `${accountUrl}${selectedValue.route}`
        // this.$router.push(selectedValue.route)
      } else {
        return null
      }
    },
    navigateToProfile (selectedValue) {
      this.updateProfileNavSelected(selectedValue.id)
      if (selectedValue.route) {
        const accountUrl = liquidParser.parse('{{site.url}}')
        window.location.href = `${accountUrl}${selectedValue.route}`
        // this.$router.push(selectedValue.route)
      } else {
        return null
      }
    }
  },
  watch: {
    $route () {
      if (this.$route.path === '/') {
        this.updateProfileNavSelected(0)
        this.updateAccountNavSelected(0)
      }
    }
  },
  computed: {
    ...mapGetters(['getSideNav'])
  }
}
</script>
<style lang="scss">
@import "./Header.scss";
</style>
