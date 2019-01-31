<template>
  <div class="stat-wrapper" :class="[align, {'flipped': flipped}]">
    <div class="label">{{ label }}</div>
    <div class="value">
      {{ prettyValue }}
      <div v-if="extra !== ''" class="extra" :class="extraClass">{{ extra | prettyExtra }}</div>
    </div>
  </div>
</template>

<script>
import numberFormat from "@/filters/numberFormat";

export default {
  name: "AntroStat",
  props: {
    /**
     * Sets the alignment of the label and value
     */
    align: {
      type: String,
      default: "left",
      validator(value) {
        return ["left", "center", "right"].indexOf(value) !== -1;
      }
    },
    flipped: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      required: false
    },
    value: {},
    extra: {
      type: String,
      default: "",
      required: false
    }
  },
  computed: {
    extraClass() {
      if (typeof this.extra === "number") {
        if (this.extra > 0) {
          return "success";
        } else if (this.extra < 0) {
          return "error";
        } else {
          return "neutral";
        }
      }
      return "neutral";
    },
    prettyValue() {
      if (typeof this.value === "number") {
        return numberFormat(this.value);
      }
      return this.value;
    }
  },
  filters: {
    prettyExtra(value) {
      if (typeof value === "number") {
        return numberFormat(value);
      }
      return value;
    }
  }
};
</script>

<style lang="scss" scoped>
.stat-wrapper {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  &.left {
    align-items: left;
  }

  &.center {
    align-items: center;
  }

  &.right {
    align-items: right;
  }

  &.flipped {
    flex-flow: column-reverse;
  }

  .label {
    font-size: 0.66rem;
    line-height: 0.5rem;
    color: $deep-safron;
    color: $hot-cinnamon;
  }

  .value {
    font-size: 1rem;
    line-height: 1rem;
    color: $outrageous-orange;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  .extra {
    color: $blue;
    font-size: 0.7rem;
    margin-left: 5px;
  }
}
</style>