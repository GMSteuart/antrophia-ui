import { CrudState } from '../../types'
// TODO: finish player interface
export interface PlayerList {
  [key: number]: string
}

export interface UserGame {
  id: number
  alias: string
  bounty: number
}

export interface Player {
  [propName: string]: any
  id: number
  UserGame?: UserGame
}

export interface PlayersState extends CrudState<Player> {}
