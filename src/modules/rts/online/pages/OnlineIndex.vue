<template>
  <div>
    <h2>Online Players</h2>
    <p>Here is a list of the most recently active players in the game.</p>
    <online-table></online-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import OnlineTable from '../components/OnlineTable.vue'

@Component({
  components: {
    OnlineTable
  }
})
export default class OnlineIndex extends Vue {
  name: string = 'OnlineIndex'
}
</script>

<style lang="scss" scoped>
</style>
