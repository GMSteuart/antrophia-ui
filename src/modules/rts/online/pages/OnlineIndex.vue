<template>
  <div>
    <h2>Online Players</h2>
    <p>Here is a list of the most recently active players in the game.</p>
    <online-table></online-table>
  </div>
</template>

<script>
import OnlineTable from "../components/OnlineTable";
export default {
  name: "OnlineIndex",
  components: {
    OnlineTable
  }
};
</script>

<style lang="scss" scoped>
</style>