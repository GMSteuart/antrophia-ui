<template>
  <div class="antro-radio" :class="{ disabled: disabled }">
    <input
      type="radio"
      :id="id"
      :value="value"
      v-on="inputListeners"
      :name="name"
      :disabled="disabled"
    >
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "AntroRadio",
  props: {
    name: {
      required: true
    },
    id: {
      required: true
    },
    label: {
      required: true
    },
    disabled: {
      default: false
    },
    value: {
      default: ""
    }
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
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
// Source: https://medium.com/claritydesignsystem/pure-css-accessible-radioes-and-radios-buttons-54063e759bb3
// hide the default radio
// ::before is the box
// ::after is the checkmark

.antro-radio {
  line-height: 28px;
  font-family: "Poppins";

  label {
    // color the text according to style guide
    color: $accent-primary-dark-gray;
  }

  &.disabled {
    label {
      color: $disabled;
    }

    label::before {
      border: 2px solid $disabled;
    }
  }
}

.antro-radio input[type="radio"] {
  opacity: 0;
}

// Initial radio state
.antro-radio label::before {
  content: "";
  display: inline-block;
  height: 20px;
  width: 20px;
  border: 2px solid $accent-secondary-dark-gray;
  border-radius: 50%;
  background-color: transparent;
}

// Positioning the outer box and checkmark
.antro-radio label {
  position: relative;
  display: inline-block;
  /* 24px width of fake radio + 9px distance between fake radio and text */
  padding-left: 33px;
}
.antro-radio label::before {
  position: absolute;
  content: "";
  display: inline-block;
}
/* Outer-box */
.antro-radio label::before {
  height: 20px;
  width: 20px;
  border: 2px solid $accent-secondary-dark-gray;
  left: 0px;
  top: 0px;
}

.antro-radio input[type="radio"]:checked + label::before {
  background-color: $primary-green;
  border-color: $primary-green;
}

/* Adding focus styles on the outer-box of the fake radio */
.antro-radio input[type="radio"]:focus + label::before {
  outline: $primary-focus auto 5px;
}
</style>
