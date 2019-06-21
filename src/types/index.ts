import { Player } from '@/store/modules/players/types'
import { CrudState, RootState } from '../store/types'

export enum AlertType {
  Danger = 'danger',
  Error = 'error',
  Success = 'success',
  Warning = 'warning'
}

// TODO: finish Alliance interface
export interface Alliance {
  id: number
}

// TODO: finish User interface
export interface User {
  id: number
  current_game_id: number
}

export interface AuthStatus {
  authenticated: boolean
}

export interface AlertState {
  type?: AlertType
  message?: string
  delay: number
}

export interface AuthState {
  status: AuthStatus
  user?: User
}

export interface BankState {
  info: any
  recipients: Player[]
}

export interface BarracksState {
  cost: number
  time: number
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

export interface UsersState {
  all?: User[]
  requestState: string
  error: string
}
