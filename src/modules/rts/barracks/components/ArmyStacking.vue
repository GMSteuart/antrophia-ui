<template>
  <div>
    <antro-card>
      <template slot="caption">Army Stacking</template>
      <template slot="body">
        <p>Arrange the order that your units attack during war by dragging them up and down.</p>
        <draggable
          v-model="units"
          :options="{group:'people'}"
          class="draggable-container"
          @start="drag=true"
          @end="drag=false"
        >
          <div v-for="unit in units" :key="unit.Unit.id" class="draggable-item">
            <font-awesome-icon :icon="faGripVertical"></font-awesome-icon>
            {{ unit.Unit.name }}
          </div>
        </draggable>
      </template>
    </antro-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions } from "vuex";
import draggable from "vuedraggable";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGripVertical } from "@fortawesome/pro-light-svg-icons";
import AntroCard from "@/components/base/AntroCard";

export default {
  name: "ArmyStacking",
  components: {
    AntroCard,
    draggable,
    FontAwesomeIcon
  },
  data() {
    return {
      faGripVertical,
      form: []
    };
  },
  computed: {
    units: {
      get() {
        return this.$store.state.player.Units;
      },
      set(value) {
        this.reorder(value);
      }
    }
  },
  methods: {
    ...mapActions({
      reorder: "barracks/reorder"
    })
  }
};
</script>

<style lang="scss" scoped>
.draggable-container {
  .draggable-item {
    border: 1px solid $input-default;
    padding: 5px;
    border-radius: $border-radius;
    cursor: move;
    color: $outrageous-orange;
    font-size: 1rem;
    margin: 3px auto;
  }
}
</style>