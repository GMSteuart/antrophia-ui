<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Online extends Vue {
  name: string = 'Online'
}
</script>

<style lang="scss" scoped>
</style>
