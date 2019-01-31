<template>
  <div class="antro-card">
    <div class="caption">
      <slot name="caption"></slot>
      <!-- <div class="icon">
        <font-awesome-icon :icon="faInfoSquare" @click="getInfo"></font-awesome-icon>
      </div>-->
    </div>
    <div class="body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faInfoSquare } from "@fortawesome/pro-light-svg-icons";

export default {
  name: "AntroCard",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      faInfoSquare,
      showInfo: false
    };
  },
  methods: {
    ...mapActions({
      showModal: "modal/show"
    }),
    getInfo() {
      this.showInfo = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.antro-card {
  background-color: $kilamanjaro;
  border-radius: $border-radius;

  .caption {
    font-size: 1rem;
    font-weight: bold;
    background-color: $orange;
    color: $black;
    border-bottom: 1px solid $kilamanjaro;
    text-transform: uppercase;
    padding: 3px;
    border-top-right-radius: $border-radius;
    border-top-left-radius: $border-radius;
    text-align: center;
  }

  .body {
    border-bottom-right-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
    padding: $border-radius;
  }
}
</style>