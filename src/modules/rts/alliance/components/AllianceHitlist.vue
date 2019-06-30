<template>
  <div></div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
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