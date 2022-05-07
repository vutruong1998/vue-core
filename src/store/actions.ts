import { ActionTree } from "vuex"
import { Item, State, RootState } from "./types"

export const actions: ActionTree<State, RootState> = {
  addItem({ commit }, item: Item) {
    commit("ADD_ITEM", item)
  },
  removeItem({ commit }, id: number) {
    commit("REMOVE_ITEM", id)
  },
}
