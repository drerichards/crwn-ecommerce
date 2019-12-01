import {
    createSelector
} from 'reselect'

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collUrlParam => (
    createSelector(
        [selectShopCollections],
        collections => collections[collUrlParam]
    )
)

export const selectCollectionsForPreview = createSelector(
    [selectCollection],
    collections => Object.keys(collections).map(key => collections[key])
)