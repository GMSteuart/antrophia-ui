<template>
  <div class="page-title-wrapper">
    <div class="page-title">
      <div class="spacer"></div>
      <span class="page-title--text">
        {{ $route.name }}
      </span>
      <font-awesome-icon
        :icon="faInfoCircle"
        size="sm"
        class="page-title--icon"
        @click="showHelp"
        @touch="showHelp"
      ></font-awesome-icon>
    </div>

    <antro-modal
      :show="show"
      @close="show = false"
    >
      <template slot="body">Help Text for page</template>
    </antro-modal>
  </div>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faInfoCircle } from '@fortawesome/pro-light-svg-icons'

  import AntroModal from './base/AntroModal'

  export default {
    name: "GamePageTitle",
    components: {
      AntroModal,
      FontAwesomeIcon,
    },
    data() {
      return {
        faInfoCircle,
        show: false
      }
    },
    methods: {
      showHelp() {
        this.show = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-title-wrapper {
    grid-area: page-title;

    .page-title {
      background-color: $black;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      padding: 0 5px;
      margin: auto;
      width: 200px;
      border-bottom: 1px solid $deep-safron;
      border-right: 1px solid $deep-safron;
      border-left: 1px solid $deep-safron;
      border-bottom-right-radius: $border-radius;
      border-bottom-left-radius: $border-radius;

      .page-title--text {
        line-height: 20px;

      }

      .page-title--icon {

      }
    }
  }
</style>