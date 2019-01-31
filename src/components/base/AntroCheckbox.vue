<template>
  <div class="antro-checkbox" :class="[{ disabled: disabled, flipped: flipped }, position]">
    <input
      v-model="checked"
      type="checkbox"
      :id="name"
      :disabled="disabled"
      :checked="value"
      @change="$emit('input', $event.target.checked)"
    >
    <label :for="name">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "AntroCheckbox",
  props: {
    position: {
      type: String,
      default: "left",
      required: false,
      validator(value) {
        return ["left", "center", "right"].indexOf(value) !== -1;
      }
    },
    flipped: {
      type: Boolean,
      default: false
    },
    name: {
      required: true
    },
    label: {
      required: true
    },
    disabled: {
      default: false
    },
    value: {
      type: Boolean | String,
      default: false
    }
  },
  data() {
    return {
      checked: null
    };
  }
};
</script>

<style lang="scss" scoped>
// Source: https://medium.com/claritydesignsystem/pure-css-accessible-checkboxes-and-radios-buttons-54063e759bb3
// hide the default checkbox
// ::before is the box
// ::after is the checkmark

$checkbox-size: 1rem;
$border-size: 2px;

.antro-checkbox {
  line-height: 1rem;
  width: fit-content;

  &.center {
    margin: auto;
  }

  label {
    color: $orange;
    font-size: 0.8rem;
    line-height: calc(
      #{$checkbox-size} + #{$border-size} * 2
    ); // center text with checkbox
  }

  &.disabled {
    label {
      color: grey;

      &::before {
        border-color: grey;
      }
    }
  }
}

.antro-checkbox input[type="checkbox"] {
  opacity: 0;
  position: absolute;
  width: calc(#{$checkbox-size} + #{$border-size} * 2);
  height: calc(#{$checkbox-size} + #{$border-size} * 2);
}

// Initial checkbox state
.antro-checkbox label::before {
  content: "";
  display: inline-block;
  height: $checkbox-size; // height - 2 * border size
  width: $checkbox-size;
  border: 1px solid $orange;
  border-radius: $border-radius;
}

// Checkmark
.antro-checkbox label::after {
  content: "";
  display: inline-block;
  height: 0.3rem;
  width: 0.7rem;
  border-left: 2px solid;
  border-bottom: 2px solid;
  transform: rotate(-50deg);
  color: $checkmark-color;
}

// Positioning the outer box and checkmark
.antro-checkbox label {
  position: relative;
  display: inline-block;
  padding-left: calc(1rem + 13px); // positions the label text
}
.antro-checkbox label::before,
.antro-checkbox label::after {
  position: absolute;
  content: "";
  display: inline-block;
}
/* Outer-box */
.antro-checkbox label::before {
  height: $checkbox-size;
  width: $checkbox-size;
  border: 2px solid $input-default; // initial color
  left: 0px;
  top: 0px;
}
.antro-checkbox {
  &.flipped {
    label {
      padding-left: 0;
      padding-right: calc(1rem + 13px);

      &::before {
        left: unset;
        right: 0px;
      }
      &::after {
        left: unset;
        right: 0.25rem;
      }
    }
  }
}

/* Checkmark */
.antro-checkbox label::after {
  left: 0.2rem;
  top: 0.33rem;
}

/* Hide the checkmark by default */
.antro-checkbox input[type="checkbox"] + label::after {
  content: none;
}
/* Unhide the checkmark on the checked state */
.antro-checkbox input[type="checkbox"]:checked + label::after {
  content: "";
}

.antro-checkbox input[type="checkbox"]:checked + label::before {
  background-color: $input-active; // checked color
  border-color: $input-active;
}

/* Adding focus styles on the outer-box of the fake checkbox */
// .antro-checkbox input[type="checkbox"]:focus + label::before {
//   outline: lightblue auto 5px;
// }
</style>
