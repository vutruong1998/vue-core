import { GetterTree } from 'vuex'
import { State, RootState } from './types'

export const getters: GetterTree<State, RootState> = {
    getItems: (state: State) => state.items
}