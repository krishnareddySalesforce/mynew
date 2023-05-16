<template>
  <div class="home-screen-outer-container">
    <carousel :per-page="1" class="capone-home-slider" :paginationSize="6"
      :paginationPadding="4"
      paginationPosition="bottom-overlay"
      navigationEnabled=true
      navigationNextLabel= ''
      navigationPrevLabel= ''
      paginationActiveColor="#42A1FF">
      <slide v-for="loan in $constants.loanTypes" :key="loan.id" :id="loan.id" class="home-slides">
        <div class="slide-contianer">
          <div class="loan-text-container">
            <span class="loan-type white">{{ loan.loantype }}</span>
            <span class="loan-description white">{{ loan.loandesc }}</span>
          </div>
          <primary-button :text="$t('APPLY_NOW')" :onClick="() => redirectTo(loan)"/>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import PrimaryButton from '../CommonComponents/Buttons/PrimaryButton/PrimaryButton.vue'
// import liquidParser from '../../liquid/liquidParser'
export default {
  name: 'HomeScreen',
  components: { Carousel, Slide, PrimaryButton },
  methods: {
    redirectTo (selectedValue) {
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
@import './HomeScreen.scss'
</style>
