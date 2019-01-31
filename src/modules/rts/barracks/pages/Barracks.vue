<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Barracks",
  computed: {
    ...mapState({
      barracksAmount: state => Number(state.player.Buildings["Barracks"].amount)
    })
  },
  created() {
    if (!this.barracksAmount && this.$route.name !== "rts-barracks-stacking") {
      this.warning("You need barracks to have access to military training!");
      this.$router.push({ name: "rts-build" });
    }
  },
  methods: {
    ...mapActions({
      warning: "alert/warning"
    })
  }
};
</script>

<style lang="scss" scoped>
</style>