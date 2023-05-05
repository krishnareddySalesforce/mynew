<template>
  <div :class="{'button-container' : isButtonFloat }">
    <button class='secondary-cta mirage bg-white border-mirage' v-if="!isButtonLoading" :class="{'border-silver': disabled}" @click="onClick" :disabled="disabled">{{ text }}</button>
    <div class="button-loader-wrapper bg-white border-silver" v-if="isButtonLoading">
      <div class="loader"  :style="'width: 30px; height: 30px;'"></div>
    </div>
  </div>
</template>

<script>
export default {
  // common component for secondary CTA
  name: 'SecondaryButton',
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
@import './SecondaryButton.scss'
</style>
