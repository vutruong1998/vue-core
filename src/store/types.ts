export type Item = {
    id: number,
    name: string
}

export interface RootState {}

export interface State {
    items: Item[]
}

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'