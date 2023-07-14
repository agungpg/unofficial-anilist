
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choose the storage solution you want to use

import collectionSlice from '@/app/collection/CollectionSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, collectionSlice);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);