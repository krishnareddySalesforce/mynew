<template>
  <div class="drop-down-outer-container bg-humming-bird">
    <div
      class="drop-down-inner-container"
      :class="{ 'scroll-space': scroll === true }"
      :style="`height:${dropDownHeight}`"
    >
      <div
        class="drop-down-option"
        :key="data.id"
        :class="{ 'selected bg-pigeon-post': data.value === optionId }"
        v-for="data in dropdownData"
      >
        <label
          class="drop-down-value"
          @click="selected(data)"
          :class="{
            'dark-grey': data.id !== optionId,
            'black': data.id === optionId,
          }"
          >{{ data.value }}</label
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DropDown",
  props: {
    dropdownData: {
      type: Array,
      required: true,
    },
    optionId: {
      required: true,
    },
    dropDownHeight: {
      required: false,
      default: "180px",
    },
    scroll: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    selected(selectedValue) {
      this.$emit("onSelect", selectedValue)
    },
  },
}
</script>

<style lang="scss" scoped>
	 @import './DropDown.scss';
</style>
