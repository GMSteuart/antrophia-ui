const enum RequestState {
  None,
  Pending,
  Success,
  Error
}

type OrderDirection = 'asc' | 'desc'

export interface CrudState<T> {
  all: T[]
}

export interface RootState {
  version: string
  [key: string]: string | CrudState<any>
}
