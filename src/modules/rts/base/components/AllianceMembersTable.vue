<template>
  <div>
    <antro-table>
      <template slot="caption">Alliance Members</template>

      <template slot="header">
        <tr>
          <th class="string"></th>
          <th class="string">Name</th>
          <th class="string">Race</th>
          <th class="number">Power</th>
          <th class="number">Land</th>
          <th class="number">Population</th>
          <th class="actions">Actions</th>
        </tr>
      </template>

      <template slot="body">
        <tr v-for="member in members" :key="member.id">
          <td>
            <font-awesome-icon v-if="member.id === leader.id" :icon="faCrown" size="md"></font-awesome-icon>
            <font-awesome-icon
              v-if="coleader && member.id === coleader.id"
              :icon="faCrown"
              size="sm"
            ></font-awesome-icon>
          </td>
          <td class="string">
            <router-link
              class="username"
              :to="{ name: 'rts-players-view', params: { player_id: member.id }}"
            >{{ member.alias }}</router-link>
          </td>
          <td class="string">{{ member.Race.name }}</td>
          <td class="number">{{ member.power | numberFormat }}</td>
          <td class="number">{{ member.land | numberFormat}}</td>
          <td class="number">{{ member.population | numberFormat}}</td>
          <td class="actions">
            <font-awesome-icon
              v-if="isLeader && member.id !== player.id"
              :icon="faBoot"
              size="sm"
              @click="kick(member.id)"
            ></font-awesome-icon>
          </td>
        </tr>
      </template>
    </antro-table>
  </div>
</template>

<script>
// TODO: consolodate with alliances/AllianceView table
import { mapState } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBoot, faCrown } from "@fortawesome/pro-light-svg-icons";
import AntroTable from "@/components/base/AntroTable";
import numberFormat from "@/filters/numberFormat";

export default {
  name: "AllianceMembersTable",
  components: {
    AntroTable,
    FontAwesomeIcon
  },
  filters: {
    numberFormat
  },
  computed: {
    ...mapState({
      coleader: state => state.base.Coleader,
      members: state => state.base.Member,
      leader: state => state.base.Leader,
      player: state => state.player.UserGame
    }),
    isLeader() {
      return (
        this.player.id === this.leader.id ||
        (this.coleader && this.player.id === this.coleader.id)
      );
    }
  },
  data() {
    return {
      faBoot,
      faCrown
    };
  },
  methods: {
    // kick(user_game_id) {}
  }
};
</script>