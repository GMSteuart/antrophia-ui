import { Race } from '../races/types'
import { UserGame } from '../players/types'

export interface Barracks {}
export interface Build {}
export interface Buildings {}
export interface Explore {}
export interface Factory {}
export interface Game {}
export interface Labs {}
export interface Minerals {}
export interface Mines {}
export interface Retals {}
export interface Units {}

export interface PlayerState {
  [key: string]: any
  nextTime?: Date
  Barracks?: Barracks
  Build?: Build
  Buildings?: Buildings
  Explore?: Explore
  Factory?: Factory
  Game?: Game
  Labs?: Labs
  Minerals?: Minerals
  Mines?: Mines
  Race?: Race
  Retals?: Retals
  Units?: Units
  UserGame?: UserGame
}
