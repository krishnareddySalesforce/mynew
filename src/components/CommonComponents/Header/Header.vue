<template>
<div class="header-container bg-primary">
  <header :class="{'blurred-background': getSideNav === true}" >
    <div class="header-logo">
      <a @click=redirectToHome>
        <img src="https://d3s87pah5oatx.cloudfront.net/uploads/8f4fcf95-7ddc-4664-9320-674f80610ccb/original/caponelogo.svg" alt="Dynamic Bank" />
      </a>
      <img
        src="https://d3s87pah5oatx.cloudfront.net/uploads/4d6d3ad8-1492-4a51-ace4-58bbd50c75fa/original/hamburgermenu.svg"
        alt="Hamburger menu"
        @click.stop="showSideNavBar"
        class="mobile-view"
      />
      <div class="desktop-account-types-container white">
        <div  class='desktop-account-types' v-for="accounts in $constants.accountTypes" :key="accounts.id" @click="navigateTo(accounts)">
          <label class="account-types">{{accounts.accountType}}</label>
        </div>
      </div>
      <div class="desktop-about-company-container white">
          <div class="desktop-about-company" v-for="options in $constants.companyProfile" :key="options.id">
            <img class="accounts-logo" alt="accounts-logo" :src='options.desktopLogo' />
            <label class='about-company'>{{options.option}}</label>
          </div>
        </div>
      <div class='login-container bg-dodger-blue white'>
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
    ...mapActions(['closeSideNav']),
    redirectToHome () {
      this.$router.push('/')
    },
    showSideNavBar () {
      this.closeSideNav(true)
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
