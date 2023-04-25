<template>
  <div :class="{'button-float-container' : isButtonFloat }" class='button-container'>
    <button class='primary-cta white bg-primary' @click="onClick" :disabled="disabled" v-if="!isButtonLoading">{{ text }}</button>
    <div class="button-loader-wrapper bg-primary" v-if="isButtonLoading">
      <div class="primary-button-loader" ></div>
    </div>
  </div>
</template>

<script>
export default {
  // common component for primary CTA
  name: 'PrimaryButton',
  props: {
    isButtonFloat: {
      type: Boolean,
      default: true
    },
    isButtonLoading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
@import './PrimaryButton.scss'
</style>
