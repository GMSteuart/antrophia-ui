<template>
  <div>
    <h3>Army Stacking</h3>
    <army-stacking></army-stacking>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ArmyStacking from "../components/ArmyStacking";

export default {
  name: "BarracksStacking",
  components: {
    ArmyStacking
  }
};
</script>

<style lang="scss" scoped>
</style>