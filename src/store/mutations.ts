import { MutationTree } from 'vuex'
import { Item, State, REMOVE_ITEM, ADD_ITEM } from './types'

export const mutations: MutationTree<State> = {
    [ADD_ITEM](state: State, payload: Item) {
        state.items.push(payload)

    },
    [REMOVE_ITEM](state: State, id: number) {
        state.items = state.items.filter((item: Item) => item.id !== id)
    }
}