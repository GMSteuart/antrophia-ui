<template>
  <div>
    <antro-table>
      <template slot="caption">Online Players</template>

      <template slot="header">
        <tr>
          <th class="string">Name</th>
          <th class="string">Alliance</th>
          <th class="string">Race</th>
          <th class="number">Power</th>
          <th class="number">Last Active</th>
        </tr>
      </template>

      <template slot="body">
        <tr v-for="(player, idx) in players" :key="idx">
          <td class="string">{{ player.UserGame.alias }}</td>
          <td
            v-if="Number(player.UserGame.alliance_id) !== 0"
            class="string"
          >{{ player.UserGame.alliance_id }}</td>
          <td v-else>n/a</td>
          <td class="string">{{ player.Race.name }}</td>
          <td class="number">{{ player.UserGame.power | numberFormat }}</td>
          <td class="number">{{ player.UserGame.modified | timeAgoInWords }}</td>
        </tr>
      </template>
    </antro-table>
  </div>
</template>

<script lang="ts">
// TODO: convert alias to link to players profile
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapState, createNamespacedHelpers } from 'vuex'
import numberFormat from '@/filters/numberFormat'
import timeAgoInWords from '@/filters/timeAgoInWords'
import AntroTable from '@/components/base/AntroTable.vue'
import { OnlineState, Player } from '@/types/index'

const {
  mapActions: mapOnlineActions,
  mapState: mapOnlineState
} = createNamespacedHelpers('online')

@Component({
  components: {
    AntroTable
  },
  filters: {
    numberFormat,
    timeAgoInWords
  },
  computed: {
    ...mapOnlineState({
      players: (state: OnlineState) => state.all
    })
  },
  methods: {
    ...mapOnlineActions({
      getAllOnline: 'getAll'
    })
  }
})
export default class OnlineTable extends Vue {
  name: string = 'OnlineTable'

  players!: Player[]
  getAllOnline!: () => Promise<any>

  created() {
    this.getAllOnline()
  }
}
</script>
