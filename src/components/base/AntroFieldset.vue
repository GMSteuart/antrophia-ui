<template>
  <fieldset class="fieldset" :class="'fieldset--' + name">
    <legend v-if="legend !== ''">{{ legend }}</legend>
    <antro-form :class="'form--' + name">
      <slot></slot>
    </antro-form>
  </fieldset>
</template>

<script>
import AntroForm from "./AntroForm";

export default {
  name: "AntroFieldset",
  props: {
    /*
     * Name
     *
     * Use to help build classes so styles can be contained in the parent element
     */
    name: {
      type: String,
      default: ""
    },
    legend: {
      type: String,
      default: ""
    }
  },
  components: {
    AntroForm
  }
};
</script>

<style lang="scss" scoped>
fieldset {
  border: 1px solid $hot-cinnamon;
  padding: 12px;
  background-color: $bean;
  border-radius: $border-radius;

  legend {
    color: #f4a460;
    font-weight: bold;
  }

  p {
    font-size: 1em;
  }
}
</style>