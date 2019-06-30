<template>
  <div>
    <h3>Barracks - Disband</h3>
    <p>Relieve military units of their duty by disbanding them here.</p>
    <barracks-disband-table></barracks-disband-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import BarracksDisbandTable from "../components/BarracksDisbandTable";
export default {
  name: "BarracksDisband",
  components: {
    BarracksDisbandTable
  }
};
</script>

<style lang="scss" scoped>
</style>