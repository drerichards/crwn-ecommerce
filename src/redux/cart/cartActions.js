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