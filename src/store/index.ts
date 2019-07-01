import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '@/types'

import { alert } from './modules/alert.module'
import { authentication } from './modules/authentication.module'
import { games } from './modules/games.module'
import { modal } from './modules/modal.module'
import { users } from './modules/users'

// Game Data
import { buildings } from './modules/buildings.module'
import { minerals } from './modules/minerals.module'
import { races } from './modules/races'
import { units } from './modules/units'

// RTS Modules
import { alliances } from './modules/alliances.module'
import { bank } from './modules/bank.module'
import { base } from './modules/alliance.module'
import { bounties } from './modules/bounties.module'
import { market } from './modules/market.module'
import { labs } from './modules/labs.module' // TODO: move to player
import { mercenaries } from './modules/mercenaries.module'
import { messages } from './modules/messages.module'
import { mines } from './modules/mines.module'
import { missiles } from './modules/missiles.module'
import { news } from './modules/news.module'
import { online } from './modules/online'
import { player } from './modules/player'
import { players } from './modules/players'
import { rankings } from './modules/rankings.module'
import { shops } from './modules/shops.module'
import { spies } from './modules/spies.module'
import { war } from './modules/war.module'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0'
  },
  modules: {
    alert,
    authentication,
    games,
    modal,
    users,

    // Game Data
    buildings,
    minerals,
    races,
    units,

    // RTS Modules
    alliances,
    bank,
    base,
    bounties,
    market,
    labs,
    mercenaries,
    messages,
    mines,
    missiles,
    news,
    online,
    player,
    players,
    rankings,
    shops,
    spies,
    war
  }
}

export default new Vuex.Store<RootState>(store)
