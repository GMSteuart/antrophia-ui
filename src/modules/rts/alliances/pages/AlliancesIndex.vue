<template>
  <div class="page--alliances">
    <h1>Alliances</h1>
    <antro-table v-if="!loading && alliances.length">
      <template slot="caption">Alliances</template>

      <template slot="header">
        <tr>
          <th class="string">Name</th>
          <th class="string">Leader</th>
          <th class="number"># Members</th>
          <th></th>
        </tr>
      </template>

      <template slot="body">
        <tr
          v-for="alliance in alliances"
          @click="view(alliance.Alliance.id)"
          :key="alliance.Alliance.id"
        >
          <td class="string">{{ alliance.Alliance.name }}</td>
          <td class="string">
            <router-link
              :to="{ name: 'rts-player-view' }"
              class="username"
            >{{ alliance.Leader.alias }}</router-link>
          </td>
          <td class="number">{{ alliance.Member.length }}</td>
          <td class="action">
            <router-link
              :to="{ name: 'rts-alliances-view', params: { alliance_id: alliance.Alliance.id }}"
            >
              <font-awesome-icon :icon="faInfoSquare" size="lg"></font-awesome-icon>
            </router-link>
          </td>
        </tr>
      </template>
    </antro-table>
    <div v-else>
      <p>
        There currently aren't any active alliances in this game.
        <b>Be the first to make one!</b>
      </p>
    </div>
    <div v-if="!Number(player.UserGame.alliance_id)">
      <router-link :to="{ name: 'rts-alliances-add' }" class="btn">+ Create Alliance</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapState } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AntroTable from "@/components/base/AntroTable";
import { faInfoSquare } from "@fortawesome/pro-light-svg-icons";

export default {
  name: "Alliances",
  components: {
    AntroTable,
    FontAwesomeIcon
  },
  computed: {
    ...mapState({
      alliances: state => state.alliances.all,
      player: state => state.player
    })
  },
  data() {
    return {
      faInfoSquare,
      loading: false
    };
  },
  created() {
    this.loading = true;
    this.fetchAlliances().then(() => {
      this.loading = false;
    });
  },
  methods: {
    ...mapActions({
      fetchAlliances: "alliances/fetch"
    })
  }
};
</script>

<style lang="scss" scoped>
</style>