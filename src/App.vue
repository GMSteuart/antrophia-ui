<template>
  <div class="app">
    <transition-group
      appear
      @appear="onAppear"
      @appear-cancelled="appearCancelled"
      @enter="enter"
      @before-enter="beforeEnter"
    >
      <div :key="'intro'" v-if="loading">
        <antrophia-intro
          class="antro-intro-wrapper centered"
          :css="false"
          :key="'antro-intro'"
        >{{ loadingString }}</antrophia-intro>
      </div>
      <component v-else :is="layout" :key="'layout'">
        <router-view></router-view>
      </component>
    </transition-group>

    <transition name="fade">
      <div
        v-if="alert.message"
        class="alert"
        :class="alert.type"
        :key="'alert'"
      >
        <font-awesome-icon :icon="faTimes" class="alert__close"></font-awesome-icon>
        <p>{{ alert.message }}</p>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
// TODO: convert to ts
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapState } from 'vuex'
import anime from 'animejs'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTimes, IconDefinition } from '@fortawesome/pro-light-svg-icons'
import AntrophiaIntro from '@/components/base/AntrophiaIntro.vue'
import { AlertState, RootState } from '@/types'
import { Route } from 'vue-router'

@Component({
  components: {
    AntrophiaIntro,
    FontAwesomeIcon
  },
  computed: mapState({
    // TODO: how to type this function
    alert: (state: RootState) => state.alert
  }),
  methods: mapActions({
    alertClear: 'alert/clear'
  })
})
export default class App extends Vue {
  name: string = 'App'
  // Data
  faTimes: IconDefinition = faTimes
  // authenticated = auth.authenticated, // TODO: move to computed from AuthState
  loading: boolean = false
  loadingString: string = 'loading...'

  // Component Decerator Declarations
  alert!: AlertState
  alertclear!: () => void

  // Lifecycle Hooks
  created() {
    // todo: only run animation on the first visit
    this.loading = true
    setTimeout(() => (this.loading = false), 1500)
  }

  // Computed properties
  get layout() {
    // check if we have a layout meta key in the route
    if (this.$route.matched.some(record => record.meta.layout)) {
      // if we do then set it to the parent layout
      // todo: make this find the matched element and set it instead of parent
      return this.$route.matched[0].meta.layout + '-layout'
    }

    return 'main-layout'
  }

  // Methods
  /* Animations */
  onAppear(el: HTMLElement) {
    anime({
      targets: '.antro-intro .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 5000,
      delay(el: HTMLElement, i: number) {
        return i * 350
      },
      direction: 'alternate',
      loop: false
    })
  }
  appearCancelled(el: HTMLElement) {
    anime({
      targets: '.antro-intro',
      opacity: 0,
      duration: 100
    })
  }
  beforeEnter(el: HTMLElement) {
    if (el.classList.contains('layout')) {
      anime({
        targets: el,
        opacity: 0
      })
    }
  }
  enter(el: HTMLElement, done: () => void) {
    anime({
      targets: el,
      opacity: 1,
      duration: 2000,
      easing: 'linear',
      complete: done
    })
  }
  /* Hooks */
  beforeRouteEnter(to: Route, from: Route, next: () => void) {
    if (this.alert.message) {
      // clear alert on location change
      // todo: flashing then redirecting a user clears the message, need to extend this so
      // that we can set a flash message and redirect without it clearing
      // this.alertClear();
    }
    next()
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Orbitron:400,500,700,900');

* {
  margin: 0;
  padding: 0;
  font-family: 'Orbitron', sans-serif;
}

html,
body {
  height: 100%;
}

body {
  // source: https://css-tricks.com/books/volume-i/scale-typography-screen-size/
  // calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));
  font-size: calc(16px + (26 - 16) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(1rem + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
}

textarea,
select,
input,
button {
  outline: none;
}

.app {
  background: $black url('/img/space.png') center top repeat fixed;
  width: 100%; // always set to 100% and not vw to prevent overflow-x
  height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: $outrageous-orange;
}

h1 {
  font-size: 3rem;
  // todo: consider letter spacing
  // todo: consider text transformation
}

a,
a:focus,
.nav-link {
  color: $outrageous-orange;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
.nav-link:hover {
  color: $yellow;
  text-decoration: none;
}

p {
  font-size: 1rem;
  margin: 0 0 1em 0;
  color: #ff9933;

  // move lists to the inside on copy
  ul {
    list-style-position: inside;
  }
}

select {
  option {
    color: $deep-safron;
  }
}

.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.antro-icon {
  color: $outrageous-orange;
}

.intro-wrapper {
  display: block;
  width: 100%;
  height: 100%;
}

.antro-intro-wrapper {
  color: $orange;
  width: fit-content;
  font-size: 3em;
  margin: auto;
}

.btn {
  display: block;
  background-color: $orange;
  color: $black;
  padding: 5px 10px;
  width: fit-content;
  border-radius: 5px;
  text-align: center;

  &:hover,
  &:active {
    background-color: $outrageous-orange;
  }
}

.alert {
  display: block;
  width: 80%;
  position: absolute;
  bottom: 5px;
  height: 10vh;
  background-color: $bean;
  color: $deep-safron;
  border-radius: $border-radius;
  border-color: $outrageous-orange;
  left: 50%;
  margin-left: -40%;
  z-index: 9;

  &--warning {
    color: $red;
  }

  p {
    display: block;
    padding: 10px;
    margin: auto;
  }

  &__close {
    position: absolute;
    top: 5px;
    right: 5px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.username,
.username a {
  color: $red;
}
</style>
