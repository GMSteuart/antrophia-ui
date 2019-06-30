<template>
  <div>
    <h3>Bonus</h3>
    <p>
      Once a day you click the bonus link to gain extra cardisium.
      The current bonus amount is: {{ bonusAmount | numberFormat }} cardisium!
    </p>
    <p class="text-danger">Note: This bonus can only be claimed in once per game per day</p>
    <div>
      <a class="btn btn-default" @click="doClaim">Claim Bonus!</a>
    </div>
    <div class="social-media">
      <h4>Social Media</h4>
      <p>
        Clicking these will not provide a bonus, but do provide alternatives to keeping up with
        updates, connecting with other players, and letting others know about Antrophia.
      </p>
      <a href="https://fb.me/antrophiagame" target="_blank">
        <font-awesome-icon :icon="faFacebookF" class="antro-icon" size="lg"></font-awesome-icon>
      </a>
      <a href="https://twitter.com/antrophia" target="_blank">
        <font-awesome-icon :icon="faTwitter" class="antro-icon" size="lg"></font-awesome-icon>
      </a>
      <a href="https://www.reddit.com/r/antrophia" target="_blank">
        <font-awesome-icon :icon="faRedditAlien" class="antro-icon" size="lg"></font-awesome-icon>
      </a>
      <a href="https://discord.gg/KHssgsF" target="_blank">
        <font-awesome-icon :icon="faDiscord" class="antro-icon" size="lg"></font-awesome-icon>
      </a>
      <a href="https://www.instagram.com/antrophia/" target="_blank">
        <font-awesome-icon :icon="faInstagram" class="antro-icon" size="lg"></font-awesome-icon>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
// TODO: Make social links little antrophia styled buttons with the icon only in an ordered row
import { mapActions, mapState } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faDiscord,
  faFacebookF,
  faInstagram,
  faRedditAlien,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import numberFormat from "@/filters/numberFormat";

export default {
  name: "BonusIndex",
  components: {
    FontAwesomeIcon
  },
  filters: {
    numberFormat
  },
  computed: {
    ...mapState({
      player: state => state.player,
      bonusAmount: state => state.player.UserGame.bonus_info.amount
    })
  },
  data() {
    return {
      faDiscord,
      faFacebookF,
      faInstagram,
      faRedditAlien,
      faTwitter
    };
  },
  created() {
    // TODO: check bonus
  },
  methods: {
    ...mapActions({
      claim: "player/claimBonus"
    }),
    doClaim() {
      this.claim().then(() => {});
    }
  }
};
</script>

<style lang="scss" scoped>
</style>