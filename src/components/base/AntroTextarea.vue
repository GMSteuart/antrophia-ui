<template>
  <div
    class="antro-textarea"
    :class="[required ? 'required' : '', 'antro-textarea--' + flow]"
  >
    <label
      v-if="label"
      class="antro-textarea__label"
      :for="label.toLowerCase()"
    >
      {{ label }}
    </label>
    <textarea
      class="antro-textarea__textarea"
      :id="label.toLowerCase()"
      :cols="cols"
      :placeholder="placeholder"
      :rows="rows"
      :value="value"
      v-on="inputListeners"
    ></textarea>
  </div>
</template>

<script>
  export default {
    name: "AntroTextarea",
    inheritAttrs: false,
    props: {
      cols: {
        type: Number,
        default: 40
      },
      flow: {
        type: String,
        default: 'row'
      },
      label: {
        type: String,
        default: '',
        required: true,
      },
      placeholder: {
        type: String,
        default: ''
      },
      required: {
        type: Boolean,
        default: false
      },
      rows: {
        type: Number,
        default: 3
      },
      value: {
        default: ''
      },
    },
    computed: {
      inputListeners: function () {
        var vm = this
        return Object.assign({},
          this.$listeners,
          {
            input: function (event) {
              vm.$emit('input', event.target.value)
            },
          }
        )
      }
    },
  }
</script>

<style lang="scss" scoped>
  .antro-textarea {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin: 5px;

    &.required {
      font-weight: bold;

      label:after {
        color: #e32;
        display:inline;
      }
    }

    &--row {
      .antro-textarea__label {
        text-align: right;
        margin-right: 5px;
        width: 45%;
      }
    }

    &--col {
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: left;

      .antro-textarea__label {
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

    &__textarea {
      background-color: $kilamanjaro;
      border: 1px solid $kilamanjaro;
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
  }
</style>