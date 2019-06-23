<template>
  <div></div>
</template>

<script>
import { mapState } from "vuex";
import AntroTable from "@/components/base/AntroTable";

export default {
  name: "AllianceHitlist",
  components: {
    AntroTable
  },
  computed: {
    ...mapState({})
  }
};
</script>