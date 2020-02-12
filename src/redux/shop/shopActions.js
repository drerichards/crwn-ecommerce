import {
    firestore,
    convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils'
import ShopActionTypes from './shopTypes'

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collRef = firestore.collection('collections')
        dispatch(fetchCollectionsStart())

        collRef.get().then(
            snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
                dispatch(fetchCollectionsSuccess(collectionsMap))
            }).catch(err => dispatch(fetchCollectionsFailure(err.message)))
    }
}

export const fetchCollectionsFailure = errMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errMessage
})

export const updateCollections = collectionsMap => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})