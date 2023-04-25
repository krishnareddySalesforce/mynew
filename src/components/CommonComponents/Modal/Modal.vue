<template>
  <div id="myModal" class="modal bg-light-dark-grey">
    <div class="modal-content bg-white">
      <div class="modal-heading bg-light-blue">
        {{ this.modalHeading }}
      </div>
      <div class="modal-data">
        <slot></slot>
        <primary-button :text="$t('Ok')" :onClick="onSubmit"/>
      </div>
    </div>
  </div>
</template>
<script>
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton.vue'
export default {
  components: { PrimaryButton },
  name: 'Modal',
  props: {
    modalHeading: {
      type: String
    },
    onSubmit: {
      type: Function
    }
  }
}
</script>
<style scoped lang="scss">
@import "./Modal.scss";
</style>
