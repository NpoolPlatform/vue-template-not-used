import { GetterTree } from 'vuex'
import { RootState } from '../index'
import { UserState } from './state'
import { UserInfo } from './types'

type UserGetters = {
  getUserInfos (state: UserState): Array<UserInfo>
  getUserLoading (state: UserState): boolean
  getUserError (state: UserState): string
}

const getters: GetterTree<UserState, RootState> & UserGetters = {
  getUserInfos: (state: UserState): Array<UserInfo> => state.Infos,
  getUserLoading: (state: UserState): boolean => state.loading,
  getUserError: (state: UserState): string => state.error
}

export { UserGetters, getters }
