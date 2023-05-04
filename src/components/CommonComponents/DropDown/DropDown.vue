<template>
  <div class="drop-down-outer-container bg-light-blue">
    <div class="drop-down-option"
      :key="data.id"
      :class="{'selected bg-hawkes-blue': data.value === optionId }"
      v-for="data in dropdownData">
      <label
        class="drop-down-value"
        @click="selected(data)"
        :class="{'dark-grey' : data.id !== optionId, 'black': data.id === optionId}"
      >{{data.value}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropDown',
  props: {
    dropdownData: {
      type: Array,
      required: true
    },
    optionId: {
      required: true
    }
  },
  methods: {
    selected (selectedValue) {
      this.$emit('onSelect', selectedValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './DropDown.scss';
</style>
