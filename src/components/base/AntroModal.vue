<template>
  <transition v-if="showModal" name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container">
          <fieldset>
            <legend>
              <slot name="header">default header</slot>
            </legend>

            <div class="modal__body">
              <slot name="body">default body</slot>
            </div>

            <div class="modal__footer">
              <div @click="close" @touch="close">
                <a class="btn btn--modal">OK</a>
              </div>
              <slot name="footer"></slot>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "antro-modal",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  mounted() {
    this.showModal = this.show;
  },
  methods: {
    close() {
      this.showModal = false;
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss">
.modal__mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: table;
  transition: opacity 0.3s ease;
}

.modal__wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal__container {
  width: 300px;
  margin: 0px auto;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal__body {
  margin: 20px 0;
}

.modal__footer {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
}

.modal__footer div:nth-child(2) {
  margin-left: 0.5em;
}

.btn--modal {
  float: right;
}

/*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal__container,
.modal-leave-active .modal__container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>