import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    nakit: 1,
    torbe: 2,
    sesiri: 3,
    naocale: 4,
    parfemi: 5
};

const selectShop = state => state.shop;

export const selectCollections= createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam => 
    createSelector(
    [selectCollections],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
);