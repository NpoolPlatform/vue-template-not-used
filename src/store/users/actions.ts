import { ActionTree } from 'vuex'
import { AugmentedActionContext, RootState } from '../index'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'
import { UserMutations } from './mutations'
import { UserState } from './state'
import { api } from 'src/boot/axios'
import { AxiosResponse } from 'axios'
import { GetUserResponse } from './types'

// use public api
const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

interface UserActions {
  [ActionTypes.GetUsers]({
    commit
  }: AugmentedActionContext<
    UserState,
    RootState,
    UserMutations<UserState>
  >): void
}

const actions: ActionTree<UserState, RootState> = {
  [ActionTypes.GetUsers] ({ commit }) {
    commit(MutationTypes.SetLoading, true)
    api
      .get<GetUserResponse>(apiUrl)
      .then((response: AxiosResponse<GetUserResponse>) => {
        commit(MutationTypes.SetUserInfos, response.data)
        commit(MutationTypes.SetError, '')
        commit(MutationTypes.SetLoading, false)
      })
      .catch((err: Error) => {
        commit(MutationTypes.SetError, err.message)
        commit(MutationTypes.SetLoading, false)
      })
  }
}

export { actions, UserActions }
