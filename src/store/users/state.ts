import { UserInfo } from './types'

interface UserState {
  Infos: Array<UserInfo>
  loading: boolean
  error: string
}

function state (): UserState {
  return {
    Infos: [],
    loading: false,
    error: ''
  }
}

export { state, UserState }
