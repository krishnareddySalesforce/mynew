<template>
  <div class="side-nav-outer-container" >
    <div class="client-outer-container">
      <div class="user-logged-in" v-if="userLoggedIn">
        <div class="client-icon bg-primary white">
          RZ
        </div>
        <div class="greeting-client">
          <span class="greeting-txt black">{{ $t("WELCOME") }}</span>
          <span class="client-name black">Robert Zane</span>
        </div>
        <hr class="border-light-grey" />
      </div>
      <div class="account-types-container black">
        <div class="account-types" v-for="accounts in $constants.accountTypes" :key="accounts.id" @click="navigateTo(accounts)">
          <img class="accounts-logo" alt="accounts-logo" :src='accounts.accountlogo' />
          <span class="account-txt">{{accounts.accountType}}</span>
        </div>
      </div>
      <hr class="border-light-grey" />
      <div class="company-profile-container black">
        <div class="account-types" v-for="options in $constants.companyProfile" :key="options.id">
          <img class="accounts-logo" alt="accounts-logo" :src='options.optionlogo' />
          <span class="account-txt">{{options.option}}</span>
        </div>
        <div class="logout" v-if="userLoggedIn">
          <div class="account-types">
            <img class="accounts-logo" alt="logout" src='https://d3s87pah5oatx.cloudfront.net/uploads/392365c7-d11f-4bb1-a0bd-bff2c365d29f/original/Logout.svg' />
            <span class="account-txt">{{ $t("LOGOUT") }}</span>
          </div>
        </div>
        <div class="login" v-if="!userLoggedIn">
          <div class="account-types">
            <img class="accounts-logo" alt="login" src='https://d3s87pah5oatx.cloudfront.net/uploads/392365c7-d11f-4bb1-a0bd-bff2c365d29f/original/Logout.svg' />
            <span class="account-txt">{{ $t("LOGIN") }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import liquidParser from '../../../liquid/liquidParser'
export default {
  name: 'SideNav',
  data: () => ({
    userLoggedIn: false
  }),
  methods: {
    navigateTo (selectedValue) {
      if (selectedValue.route) {
        // const accountUrl = liquidParser.parse('{{site.url}}')
        // window.location.href = `${accountUrl}${selectedValue.route}`
        // this.$router.push(selectedValue.route)
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import './SideNav.scss'
</style>
