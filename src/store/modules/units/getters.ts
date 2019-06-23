import { GetterTree } from 'vuex'
import { RootState, Unit, UnitsState } from '@/types'
import groupBy from 'lodash/groupBy'
import { Dictionary } from 'lodash'

export const getters: GetterTree<UnitsState, RootState> = {
  getRaceByName: (_state: UnitsState, _getters) => (name: string): Unit[] => {
    return _getters.orderByRace[name]
  },
  orderByRace(state: UnitsState): Dictionary<Unit[]> {
    // TODO: can we optimizae code by removing the groupBy lodash function?
    return groupBy(state.all, 'Race.name')
  }
}
