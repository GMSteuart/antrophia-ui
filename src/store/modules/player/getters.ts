import { GetterTree } from 'vuex'
import { PlayerFinishTimes, PlayerState, RootState } from '@/types'
export const getters: GetterTree<PlayerState, RootState> = {
  finishTimeByName: (state: PlayerState) => (
    name: string
  ): number | undefined => {
    if (name in PlayerFinishTimes && state.hasOwnProperty(name)) {
      if (state[name].end) {
        return state[name].end.getTime() - new Date().getTime()
      }
      return undefined
    }
    throw new Error(`property '${name}' does not exist on player state`)
  }
}
