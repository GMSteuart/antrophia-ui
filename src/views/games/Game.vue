<template>
  <router-view></router-view>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Game extends Vue {
  name: string = 'Game'
}
</script>

<style lang="scss" scoped>
</style>
