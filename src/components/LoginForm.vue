<template>
  <antro-fieldset
    legend="Login"
    name="login"
  >
    <antro-input
      v-model="email"
      label="Email"
      type="text"
    >
    </antro-input>
    <antro-input
      v-model="password"
      label="Password"
      type="password"
    ></antro-input>
    <antro-button
      class="btn--submit antro-btn"
      @click.native="doLogin"
    >Login</antro-button>
  </antro-fieldset>
</template>

<script>
  import { mapActions } from 'vuex'

  import AntroButton from './base/AntroButton'
  import AntroFieldset from './base/AntroFieldset'
  import AntroInput from './base/AntroInput'

  export default {
    name: "LoginForm",
    components: {
      AntroButton,
      AntroFieldset,
      AntroInput
    },
    data() {
      return {
        email: 'dev@antrophia.com',
        password: 'test'
      }
    },
    created () {
      // reset login status
      this.logout();
    },
    methods: {
      ...mapActions({
        login: 'authentication/login',
        logout: 'authentication/logout'
      }),
      doLogin() {
        const { email, password } = this;

        if (email && password) {
          this.login({ email, password })
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .fieldset--login {
    width: 75%;

    .form--login {
      width: 100%;
      height: 100%;
      background-color: $bean;
      border: 1px solid $outrageous-orange;
      border-radius: 5px;
    }
  }
</style>