import { MutationTree } from 'vuex'
import { PlayerState } from '@/types'

export const mutations: MutationTree<PlayerState> = {
  setBonus(state, bonus) {
    state.bonus = bonus
  },
  setNextTime(state, nextTime) {
    state.nextTime = nextTime
  },
  setPlayer(state, player) {
    // Iterate over the properties in the state because its everything thats expected
    for (const property in state) {
      if (state.hasOwnProperty(property)) {
        // Ff the player object has it, then lets set them equal
        if (player.hasOwnProperty(property)) {
          state[property] = player[property]
        } else {
          // Otherwise we will set it to null. This helps with finishing builds, research, etc.
          state[property] = null
        }
      }
    }
  }
}
