<template>
  <div
    class="antro-input"
    :class="[required ? 'required' : '']"
  >
    <label
      v-if="label"
      class="antro-input__label"
      @click="setFocus"
    >
      {{ label }}
      <span v-if="!isFocused">
        {{ prettyValue }}
      </span>
    </label>
    <input
      class="antro-input__input"
      :type="type"
      :value="value"
      :width="width"
      v-on="inputListeners"
    />
    <div class="antro-input__line">
      <svg :width="width" :height="height">
        <g :style="{transform: `translate(${margin.left}px, ${margin.top}px)`}">
          <path color="orange" :d="line"></path>
        </g>
      </svg>
    </div>
    <slot name="help-text" class="antro-input__help-text"></slot>
  </div>
</template>

<script>
  import anime from 'animejs'

  import numberFormat from '@/filters/numberFormat'

  // todo: set svg width/height to 100% and then some?
  export default {
    name: 'AntroInput',
    inheritAttrs: false,
    props: {
      height: {
        default: 26
      },
      margin: {
        type: Object,
        default: () => ({
          left: 1,
          right: 0,
          top: 0,
          bottom: 0,
        }),
      },
      label: {
        type: String,
        default: ''
      },
      required: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'text'
      },
      value: {
        default: ''
      },
      width: {
        default: 60
      }
    },
    data() {
      return {
        isFocused: false,
        line: '',
      }
    },
    computed: {
      prettyValue() {
        if (this.isFocused
          || this.value === 0
          || this.value === '')
        {
          return ''
        }

        if (this.type === 'number') {
          return ': ' + numberFormat(this.value)
        }

        return ': ' + this.value
      },
      inputListeners: function () {
        var vm = this
        return Object.assign({},
          this.$listeners,
          {
            input: function (event) {
              vm.$emit('input', event.target.value)
            },
            // /* the focousout and focus methods were implemented because input value would be lost on focusout */
            // focusout: function (event) {
            //   vm.inputValue = event.target.value
            //   vm.focusOut()
            // },
          }
        )
      }
    },
    mounted() {
      this.createLinePath()
    },
    methods: {
      createLinePath() {
        let startingPoint = 8 // set to 8 since this is the end point
        let width = parseInt(this.width)
        let height = parseInt(this.height)

        if (this.label !== '') {
          startingPoint = Math.ceil(this.$el.querySelector('.antro-input__label').clientWidth)
        }

        this.line = `M${startingPoint} 0 H ${width - 10} C ${width - 5} 0, ${width - 3} 0, ${width - 3} 10 V 20 C ${width - 3} 20, ${width - 3} ${height - 1}, ${width - 5} ${height - 1} H 5 C 3 ${height - 1}, 0 ${height - 1}, 0 20 V 5 C 0 5, 0 0, 5 0 H 8`
      },
      setFocus() {
        this.$el.querySelector('.antro-input__input').focus()
        this.isFocused = true
      },
      focus(event) {
        let path = this.$el.querySelector('.antro-input__line path')
        let input = this.$el.querySelector('.antro-input__input')
        let vm = this

        let timeline = anime.timeline()

        if (this.label !== '') {
          let label = this.$el.querySelector('.antro-input__label')

          timeline.add({
            targets: label,
            duration: 150,
            translateY: -14,
            translateX: -6,
            // fontSize: '0.5em',
            direction: 'alternate',
            scale: 0.8,
            complete() {
              vm.setFocus()
            }
          })
        }

        timeline
          .add({
            targets: path,
            opacity: 1,
            duration: 0
          })
          .add({
            targets: path,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 250,
            delay: function(el, i) { return i * 250 },
            direction: 'alternate',
            loop: false,
            offset: '-=75',
          })
          .add({
            targets: input,
            color: '#FF9933'
          })
      },
      focusout() {
        let input = this.$el.querySelector('.antro-input__input')
        let vm = this

        let timeline = anime.timeline()
          .add({
            targets: input,
            color: 'rgba(0, 0, 0, 0)',
            duration: 50,
          })
          .add({
            targets: this.$el.querySelector('.antro-input__line path'),
            strokeDashoffset: [0, anime.setDashoffset],
            easing: 'easeInOutSine',
            duration: 175,
            delay: function(el, i) { return i * 250 },
            direction: 'alternate',
            loop: false,
            offset: '-=0',
          })

        if (this.label !== '') {
          let label = this.$el.querySelector('.antro-input__label')

          timeline.add({
            targets: label,
            duration: 50,
            translateY: 0,
            translateX: 0,
            scale: 1,
            easing: 'linear',
            offset: '-=75',
            complete() {
              vm.isFocused = false
            }
          })
        }

      },
      created() {
        this.createLine()
      },
      createLine() {
        // this.paths.line = "M22,70l0,172l35,-1l-14,-108l29,45l46,-45l-36,158l52,1l20,-232l-52,22l-23,47l-18,-65Z"
      }
    }
  }
</script>

<style lang="scss" scoped>
  .antro-input {
    position: relative;
    display: flex;
    flex-flow: column nowrap;

    &.required {
      font-weight: bold;

      label:after {
        color: #e32;
        display:inline;
      }

    }
  }

  .antro-input__label {
    //font-size: 0.5em;
    width: fit-content;
    color: $hot-cinnamon;
    margin-left: 10px;
    z-index: 6;
    // initial
    font-size: 0.8em;
    position: absolute;
    top: calc(50% - 0.5em);
  }

  .antro-input__input {
    width: 50px;
    background-color: $kilamanjaro;
    border: 1px solid $kilamanjaro;
    height: 16px;
    border-radius: 3px;
    margin: 5px;
    z-index: 5;
    // initial
    color: $deep-safron;

    &:focus {
      border: 1px solid $hot-cinnamon;
    }

    &:active {
      //border: 1px solid $hot-cinnamon;
      /*background: #000;*/
      /*color: #FF9966;*/
      color: $deep-safron;
    }

    &::placeholder {
       color: $deep-safron;
       opacity: 0.7;
    }
  }

  .antro-input__line {
    position: absolute;
    top: 0;
    display: block;
    z-index: 4;

    path {
      stroke: $outrageous-orange;
      fill: none;
      opacity: 0;
    }
  }
</style>