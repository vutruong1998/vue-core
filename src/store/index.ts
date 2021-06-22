import { createStore, ActionTree, MutationTree, GetterTree, RootState } from 'vuex'
import { Items, State, REMOVE_ITEM, ADD_ITEM } from './type'

const state: State = {
    items: [
        {
            id: 1,
            name: 'Vũ Văn A'
        },
        {
            id: 2,
            name: 'Nguyễn Văn Buồi'
        },
        {
            id: 3,
            name: 'Lê Văn Cặc'
        }
    ]
}

const getters: GetterTree<State, RootState> = {
    getItems: (state: State) => state.items
}

const mutations: MutationTree<State> = {
    [ADD_ITEM](state: State, payload: Items) {
        state.items.push(payload)

    },
    [REMOVE_ITEM](state: State, id: number) {
        state.items = state.items.filter((item: Items) => item.id !== id)
    }
}

const actions: ActionTree<State, RootState> = {
    addItem({ commit }, item: Items) {
        commit('ADD_ITEM', item)
    },
    removeItem({ commit }, id: number) {
        commit('REMOVE_ITEM', id)
    }
}

const store = {
    state,
    getters,
    mutations,
    actions
}

export default createStore({
    modules: { store }
})