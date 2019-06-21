import { GetterTree } from 'vuex'
import { RootState } from '../../types'
// TODO: finish unit interface
export interface Unit {
  id: number
}

export interface UnitsState {
  all?: Unit[]
}
