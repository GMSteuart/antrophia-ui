<template>
  <div v-if="alliance" class="alliance-info">
    <h1>{{ alliance.Alliance.name }} Alliance</h1>

    <antro-table>
      <template slot="caption">Members</template>

      <template slot="header">
        <tr>
          <th></th>
          <th class="string">Name</th>
          <th class="string">Race</th>
          <th class="number">Power</th>
          <th class="number">Land</th>
        </tr>
      </template>

      <template slot="body">
        <tr v-for="member in alliance.Member" :key="member.id">
          <td>
            <font-awesome-icon v-if="member.id === alliance.Leader.id" :icon="faCrown" size="md"></font-awesome-icon>
            <font-awesome-icon v-if="member.id === alliance.Coleader.id" :icon="faCrown" size="sm"></font-awesome-icon>
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
        </tr>
      </template>
    </antro-table>

    <div v-if="Number(player.UserGame.alliance_id) === 0" class="alliance-info__join">
      <antro-fieldset legend="Join Alliance" name="alliance-join">
        <antro-input v-model="password" label="Alliance Password" type="password"></antro-input>

        <antro-button @click.native="join">Join</antro-button>
      </antro-fieldset>
    </div>

    <div>
      <router-link :to="{ name: 'rts-alliances' }">Back to all Alliances</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AntroButton from "@/components/base/AntroButton";
import AntroCard from "@/components/base/AntroCard";
import AntroTable from "@/components/base/AntroTable";
import AntroFieldset from "@/components/base/AntroFieldset";
import AntroInput from "@/components/base/AntroInput";
import { faCrown } from "@fortawesome/pro-light-svg-icons";
import numberFormat from "@/filters/numberFormat";

export default {
  name: "AlliancesView",
  components: {
    AntroButton,
    AntroCard,
    AntroInput,
    AntroFieldset,
    AntroTable,
    FontAwesomeIcon
  },
  props: {
    alliance_id: {
      required: true
    }
  },
  filters: {
    numberFormat
  },
  data() {
    return {
      faCrown,
      password: null
    };
  },
  computed: {
    ...mapState({
      alliance: state => state.alliances.active,
      player: state => state.player
    })
  },
  created() {
    this.view(this.alliance_id);
  },
  methods: {
    ...mapActions({
      join: "alliance/join",
      view: "alliances/view"
    }),
    doJoin() {
      const { alliance_id, password } = this;

      this.join({ alliance_id, password });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>