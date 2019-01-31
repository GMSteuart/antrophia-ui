<template>
  <div class="antro-btn">
    <slot></slot>
    <!--<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50">-->
    <!--<g>-->
    <!--<path d="M0 0 H 120 V 30 H 10 L 0 20 H 0"></path>-->
    <!--<text x="25" y="18"></text>-->
    <!--</g>-->
    <!--</svg>-->
  </div>
</template>

<script>
export default {
  name: "AntroButton"
};
</script>

<style lang="scss" scoped>
.antro-btn {
  display: block;
  width: fit-content;
  height: 30px;
  background-color: $orange;
  text-align: center;
  line-height: 30px;
  padding: 0 10px;
  border-radius: 5px;
  font-size: 1rem;
  color: $black;

  path {
    fill: $orange;
  }

  &:hover {
    path {
      fill: $outrageous-orange;
    }
  }

  &.success {
    background-color: $green;
  }

  &.warning {
    background-color: $yellow;
  }

  &.error {
    background-color: $dark-red;
  }
}
</style>