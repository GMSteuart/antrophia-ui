<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapState } from "vuex";

export default {
  name: "Base",
  computed: {
    ...mapState({
      alliance_id: state => state.player.UserGame.alliance_id
    })
  },
  created() {
    if (!this.alliance_id) {
      // TODO: implement notification informing user they are not part of an alliance
      this.$router.push("rts-alliances");
    }
    this.fetchAlliance();
  },
  methods: {
    ...mapActions({
      fetchAlliance: "base/fetch"
    })
  }
};
</script>

<style lang="scss" scoped>
</style>