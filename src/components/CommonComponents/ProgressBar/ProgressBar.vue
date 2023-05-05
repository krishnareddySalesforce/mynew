<template lang="">
  <div class="progress-bar-container">
    <div class="mobile-progressbar">
      <div class="previous-button desktop-view" @click="gotoPreviousPage()">
        <img class="btn-icon" src="https://d3s87pah5oatx.cloudfront.net/uploads/885bcee9-956c-43bb-9d34-39eaa3eb11e4/original/previous.svg" alt="prev">
        <div class="btn-text dark-grey">{{$t("PREVIOUS_BTN_TEXT")}}</div>
      </div>
      <div class="loan-progress-bar bg-light-blue">
        <div class="progress bg-jungle-green" :style="getProgress"></div>
      </div>
      <div class="progress-status dark-grey desktop-view">
        {{`${completedSteps}/${totalSteps}`}}
      </div>
      <div class="button-progress-container">
        <div class="previous-button" @click="gotoPreviousPage()">
          <img class="btn-icon" src="https://d3s87pah5oatx.cloudfront.net/uploads/885bcee9-956c-43bb-9d34-39eaa3eb11e4/original/previous.svg" alt="prev">
          <div class="btn-text dark-grey">{{$t("PREVIOUS_BTN_TEXT")}}</div>
        </div>
        <div class="progress-status dark-grey">
          {{`${completedSteps}/${totalSteps}`}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProgressBar',
  props: {
    completedSteps: {
      type: Number,
      required: true
    },
    totalSteps: {
      type: Number,
      required: true
    }
  },
  computed: {
    // calculate the progress based on the props
    getProgress () {
      return this.completedSteps <= this.totalSteps ? `width: ${(this.completedSteps / this.totalSteps) * 100}%` : 'width: 0%'
    }
  },
  methods: {
    gotoPreviousPage () {
      this.$router.go(-1)
      setTimeout(function () {
        window.scrollTo(0, 0)
      }, 2)
    }
  }
}
</script>
<style lang="scss">
  @import './ProgressBar.scss'
</style>
