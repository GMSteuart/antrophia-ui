<template>
  <antro-fieldset
    legend="Register"
    name="register"
  >
    <antro-input
      v-model="username"
      flow="col"
      label="Username"
      type="text"
      width="200"
    ></antro-input>
    <antro-input
      v-model="email"
      flow="col"
      label="Email"
      type="text"
      width="200"
    ></antro-input>
    <antro-input
      v-model="password"
      flow="col"
      label="Password"
      type="password"
      width="200"
    ></antro-input>
    <antro-input
      v-model="password_confirm"
      flow="col"
      label="Confirm Password"
      type="password"
      width="200"
    ></antro-input>

    <p class="legal">
      By clicking Register, you agree to Antrophia's
      <router-link to="/terms-of-serive">Term of Service</router-link>,
      <router-link to="/privacy-policy">Privacy Policy</router-link>, and that you are
      at least 13 years of age.
    </p>

    <div class="btn btn--register">Register</div>
  </antro-fieldset>
</template>

<script>
  import AntroFieldset from './base/AntroFieldset'
  import AntroInput from './base/AntroInput'

  export default {
    name: "RegisterForm",
    components: {
      AntroFieldset,
      AntroInput
    },
    data() {
      return {
        username: '',
        email: '',
        password: '',
        password_confirm: '',
        receive_emails: false
      }
    }
  }
</script>

<style lang="scss">
  .fieldset--register {
    width: 75%;
    margin: auto;
    max-width: 350px;

    .form--register {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;

      .legal {
        margin: 10px auto;
        font-size: 0.7em;
      }
    }
  }
</style>