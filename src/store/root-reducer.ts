import { combineReducers } from '@reduxjs/toolkit'

import collectionSlice from '@/app/collection/CollectionSlice'

export default combineReducers({
  collections: collectionSlice,
})
