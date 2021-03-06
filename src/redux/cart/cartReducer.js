import {
    CartActionTypes
} from './cartActionTypes'
import {
    addItemToCart,
    removeItemFromCart,
    reduceDeleteItemFromCart
} from './cartUtils'


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_HIDE_CART:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload.id)
            }
        case CartActionTypes.REDUCE_DELETE_ITEM:
            return {
                ...state,
                cartItems: reduceDeleteItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer