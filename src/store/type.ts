export type Items = {
    id: number,
    name: string
}

export interface State {
    items: Items[]
} 

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'