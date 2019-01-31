<template>
  <nav class="nav--main">
    <div class="antro-logo">
      <router-link to="/">
        <img src="/img/logo/logo.png" width="30" height="30">
        <span class="title">Antrophia</span>
      </router-link>
    </div>

    <div class="menu">
      <router-link class="nav-item" to="/">Home</router-link>
      <router-link class="nav-item" to="/news">News</router-link>
      <router-link class="nav-item" to="/help">Help</router-link>
      <router-link v-if="!loggedIn" class="nav-item" to="/login">Login</router-link>

      <router-link v-if="loggedIn" class="nav-item" to="/lobby">Lobby</router-link>
      <router-link v-if="loggedIn" class="nav-item" to="/settings">
        <font-awesome-icon :icon="faUser"></font-awesome-icon>
      </router-link>

      <a v-if="loggedIn" class="nav-item" @click="doLogout">
        <font-awesome-icon :icon="faSignOut"></font-awesome-icon>
      </a>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSignOut, faUser } from "@fortawesome/pro-light-svg-icons";

export default {
  name: "MainNav",
  components: {
    FontAwesomeIcon
  },
  computed: {
    ...mapState({
      loggedIn: state => state.authentication.status.loggedIn
    })
  },
  data() {
    return {
      faSignOut,
      faUser
    };
  },
  methods: {
    ...mapActions({
      logout: "authentication/logout"
    }),
    doLogout() {
      this.logout();
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.nav--main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: $black;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 2fr 5fr;
  grid-template-areas: "logo menu";
  z-index: 9;
  align-items: center;

  .antro-logo {
    grid-area: logo;
    margin-left: 20px;

    a {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      font-size: 1rem;
    }

    .title {
      display: none;

      @include respond-to("sm") {
        display: block;
      }
    }
  }
  .menu {
    grid-area: menu;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;

    .nav-item {
      font-size: 1rem;
      text-align: center;
      line-height: 1rem;
    }
  }
}
</style>