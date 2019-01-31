<template>
  <div class="antro-input" :class="[required ? 'required' : '', flow]">
    <label v-if="showLabel && label" class="label" :for="label.toLowerCase()">{{ label }}</label>
    <input
      class="input"
      :id="label.toLowerCase()"
      :type="type"
      :value="value"
      v-on="inputListeners"
    >
    <div v-if="error">{{ error }}</div>
    <slot name="help-text" class="help-text"></slot>
  </div>
</template>

<script>
// TODO: implement a symbol to be added after (e.g. material design)
import anime from "animejs";

import numberFormat from "@/filters/numberFormat";

// todo: set svg width/height to 100% and then some?
export default {
  name: "AntroInput",
  inheritAttrs: false,
  props: {
    error: {
      type: Boolean | String,
      default: false
    },
    height: {
      default: 26
    },
    margin: {
      type: Object,
      default: () => ({
        left: 1,
        right: 0,
        top: 0,
        bottom: 0
      })
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
    required: {
      type: Boolean,
      default: false
    },
    showLabel: {
      type: Boolean,
      default: true,
      required: false
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      default: ""
    },
    width: {
      default: 150
    }
  },
  data() {
    return {
      isFocused: false
    };
  },
  computed: {
    inputListeners: function() {
      var vm = this;
      return Object.assign({}, this.$listeners, {
        input: function(event) {
          vm.$emit("input", event.target.value);
        }
      });
    }
  },
  methods: {
    setFocus() {
      this.$el.querySelector(".antro-input__input").focus();
      this.isFocused = true;
    },
    focus(event) {},
    focusout() {},
    created() {}
  }
};
</script>

<style lang="scss" scoped>
input {
  background: #000;
  clear: both;
  //font-size: 140%;
  font-family: "frutiger linotype", "lucida grande", "verdana", sans-serif;
  padding: 0.3em;
  //width:98%;
  color: #f96;

  ::placeholder {
    color: $orange;
    opacity: 0.5;
  }
}

.antro-input {
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

  &.row {
    .label {
      text-align: right;
      margin-right: 5px;
      width: 45%;
    }
  }

  &.col {
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: left;

    .label {
      text-align: left;
      margin-bottom: 2px;
      width: 100%;
    }
  }

  .label {
    color: $hot-cinnamon;
    z-index: 6;
    font-size: 0.7em;
  }

  .input {
    background-color: $kilamanjaro;
    border: 1px solid $kilamanjaro;
    height: 16px;
    border-radius: 3px;
    z-index: 5;
    color: $deep-safron;

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

  &.outline {
    .input {
      border-color: $hot-cinnamon;

      &:focus {
        border-color: $international-orange;
      }
    }
  }
}
</style>