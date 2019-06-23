<template>
  <div class="antro-select" :class="[required ? 'required' : '', 'antro-input--' + flow]">
    <label v-if="label" class="antro-select__label" :for="label.toLowerCase()">{{ label }}</label>

    <select
      class="antro-select__select"
      :id="label.toLowerCase()"
      :style="{ width: width + 'px' }"
      :value="value"
      :width="width"
      v-on="inputListeners"
    >
      <option v-if="disabledText" disabled value>{{ disabledText }}</option>
      <option v-for="(value, id) in options" :key="id" :value="id">{{ value }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "AntroSelect",
  inheritAttrs: false,
  props: {
    disabledText: {
      type: String,
      default: null,
      required: false
    },
    label: {
      type: String,
      default: "",
      required: true
    },
    flow: {
      type: String,
      default: "row"
    },
    options: {
      type: Array | Object,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    value: {
      default: ""
    },
    width: {
      default: 150
    }
  },
  data() {
    return {};
  },
  computed: {
    inputListeners() {
      var vm = this;
      return Object.assign({}, this.$listeners, {
        input(event) {
          vm.$emit("input", event.target.value);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.antro-select {
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 5px;

  &.required {
    font-weight: bold;

    label:after {
      color: #e32;
      display: inline;
    }
  }

  &--row {
    .antro-select__label {
      text-align: right;
      margin-right: 5px;
      width: 45%;
    }
  }

  &--col {
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: left;

    .antro-select__label {
      text-align: left;
      margin-bottom: 2px;
      width: 100%;
    }
  }

  &__label {
    color: $hot-cinnamon;
    z-index: 6;
    font-size: 0.7em;
  }

  &__select {
    background-color: $kilamanjaro;
    border: 1px solid $kilamanjaro;
    height: 16px;
    border-radius: 3px;
    z-index: 5;
    color: $deep-safron;
    width: 55%;

    &:focus {
      border: 1px solid $hot-cinnamon;
    }

    &:active {
      color: $deep-safron;
    }

    &::placeholder {
      color: $deep-safron;
      opacity: 0.7;
    }
  }
}
</style>
