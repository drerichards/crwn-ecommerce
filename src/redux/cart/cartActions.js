import {
    CartActionTypes
} from './cartActionTypes'

export const toggleHideCart = () => ({
    type: CartActionTypes.TOGGLE_HIDE_CART
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const reduceDeleteItemFromCart = item => ({
    type: CartActionTypes.REDUCE_DELETE_ITEM,
    payload: item
})