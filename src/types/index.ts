/**
 * Types
 */
/* Enums */
export enum AlertType {
  Danger = 'danger',
  Error = 'error',
  Success = 'success',
  Warning = 'warning'
}

export enum Factory {
  Build = 'build_pct',
  Missile = 'missile_pct',
  Scanner = 'scanner_pct'
}

export enum PlayerFinishTimes {
  Barracks = 'Barracks',
  Build = 'Build',
  Explore = 'Explore',
  Research = 'Research',
  Spies = 'Spies'
}

export enum RequestState {
  None,
  Pending,
  Success,
  Error
}

export type OrderDirection = 'asc' | 'desc'

/* Interfaces */
export interface AlertState {
  type?: AlertType
  message?: string
  delay: number
}

// TODO: finish Alliance interface
export interface Alliance {
  id: number
  name: string
  password?: string
  info?: string
}

export interface AllianceForm {
  name: string
  password: string
  passwordConfirm: string
  info: string
}

export interface AllianceBankState {
  // TODO: determine properties on alliance bank
  amount: number
}

export interface AllianceState {
  [key: string]: any
}

export interface AlliancesState extends CrudState<Alliance> {
  active?: Alliance
}

export interface AuthState {
  status: AuthStatus
  user?: User
}

export interface AuthStatus {
  authenticated: boolean
}

export interface BankState {
  info: any
  recipients: Player[]
}

export interface Barracks {
  id: number
}
export interface BarracksState {
  cost: number
  time: number
}

export interface BountiesState extends CrudState<Player> {}

export interface Build {
  id?: number
  end?: Date
}
export interface Building {
  id: number
  name: string
  cost: number
  info: string
  tooltip: string
  created?: Date
  modified?: Date
}
export interface Buildings {
  [buildingName: string]: any
}

export interface BuildingsState extends CrudState<Building> {}

export interface BuildState {
  buildings: Building[]
  cost: number
  free_land: number
  land_used: number
  time: number
}

export interface CrudState<T> {
  all: T[]
}

export interface Explore {
  id?: number
  time?: number
  money?: number
  end?: Date
}

export interface ExploreState {
  estimatedLandGain: number
}

export interface Factories {
  [factoryName: string]: number
}
export interface FactoriesState extends CrudState<Factory> {}

export interface Game {
  id: number
  speedfactor: number
}

export interface GamesState {
  current: Game[]
  upcoming: Game[]
  playing: Game[]
}

export interface JoinGameForm {
  gameId: number
  raceId: number
}

export interface Lab {
  id: number
}

export interface Labs {
  [labName: string]: Lab
}

export interface Mineral {
  id: number
}

export interface Minerals {
  [mineralName: string]: Mineral
}

export interface MineralsState extends CrudState<Mineral> {}

export interface Mines {
  id: number
}
export interface ModalState {
  show: boolean
  text: string
}

export interface OnlineState {
  all?: Player[]
}

// TODO: finish player interface
export interface Player {
  [propName: string]: any
  id: number
  UserGame?: UserGame
}

export interface PlayerList {
  [key: number]: string
}

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
  Retals?: Retal[]
  Units?: Units
  UserGame?: UserGame
}

export interface PlayersState extends CrudState<Player> {}

// TODO: finish Race interface
export interface Race {
  id: number
  name: string
}

export interface Retal {
  id: number
}

export interface RootState {
  version: string
  [key: string]: string | CrudState<any>
}

export interface Unit {
  id: number
}

export interface Units {
  [unitName: string]: Unit
}

// TODO: finish User interface
export interface User {
  id: number
  current_game_id: number
}

export interface UserGame {
  id: number
  alias: string
  bounty: number
}

export interface RacesState {
  all?: Race[]
}

export interface UnitsState {
  all?: Unit[]
}

export interface UsersState {
  all?: User[]
  requestState: string
  error: string
}
