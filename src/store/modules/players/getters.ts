import { GetterTree } from 'vuex'
import { Player, PlayersState, PlayerList, UserGame } from './types'
import { RootState } from '../../types'
import orderBy from 'lodash/orderBy'
import filter from 'lodash/filter'

export const getters: GetterTree<PlayersState, RootState> = {
  list(state: PlayersState) {
    const _list: PlayerList = {}
    if (state.all) {
      state.all.forEach((player: Player) => {
        if (player.UserGame) {
          _list[player.UserGame.id] = player.UserGame.alias
        }
      })
    }
    return _list
  },
  orderByBounty: state => (dir: 'asc' | 'desc') => {
    if (typeof dir === 'undefined') {
      dir = 'asc'
    }

    // TODO: can we optimize by removing orderBy?
    return orderBy(
      // TODO: can we optimize by removing filter?
      filter(state.all, (p: Player) => {
        if (p.UserGame) {
          return p.UserGame.bounty > 0
        }
        return false
      }),
      ['UserGame.bounty'],
      [dir]
    )
  }
}
