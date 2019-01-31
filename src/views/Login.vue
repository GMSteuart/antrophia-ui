<template>
  <div class="login-view centered">
    <login-form></login-form>
    <p><router-link to="/password-recovery">Forgot your password?</router-link></p>
  </div>
</template>

<script>
  import LoginForm from '@/components/LoginForm'

  export default {
    name: "Login",
    components: {
      LoginForm,
    }
  }
</script>

<style lang="scss" scoped>

</style>