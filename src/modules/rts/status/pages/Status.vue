<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Status extends Vue {
  name: string = 'Status'
}
</script>

<style lang="scss">
</style>
