import ShopActionTypes from './shopTypes'

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errMessage: undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
            default:
                return state
    }
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
            break;
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                    collections: action.payload
            }
            break;
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                    errMessage: action.payload
            }
            break;
        default:
            break;
    }
}

export default shopReducer