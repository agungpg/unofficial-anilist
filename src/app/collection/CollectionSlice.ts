import { createSlice } from '@reduxjs/toolkit'

import { AnimeListItemTypes } from '@/types/animeList'

export type collectStateType = {
  name: string
  createdAt: string
  updatedAt: string
  animeList: AnimeListItemTypes[]
}

const initialCollectState: collectStateType[] = []

const collectionSlice = createSlice({
  name: 'collectionList',
  initialState: initialCollectState,
  reducers: {
    addToCollection: (state: collectStateType[], action) => {
      const { collectionList, animeList } = action.payload

      const animeId = animeList.reduce((result: any, anime: AnimeListItemTypes) => {
        result[anime.id] = true
        return result
      }, {})

      state.forEach((collection: collectStateType, index: number) => {
        state[index] = {
          ...collection,
          animeList: collection.animeList.filter((anime: AnimeListItemTypes) => !animeId[anime.id]),
        }
      })

      state.forEach((collection: collectStateType, index: number) => {
        if (collectionList.includes(collection.name)) {
          state[index] = {
            ...collection,
            animeList: collection.animeList.concat(animeList),
          }
        }
      })
    },
    createCollection: (state: collectStateType[], action) => {
      const { collection } = action.payload
      state = [...state, collection]
      return state
    },
    editCollection: (state: collectStateType[], action) => {
      const { collectionNameOrigin, collectionNameNew } = action.payload
      state = state.map((col) => ({
        ...col,
        name: col.name == collectionNameOrigin ? collectionNameNew : col.name,
      }))
      return state
    },
    removeCollection: (state: collectStateType[], action) => {
      const { collectionName } = action.payload
      return state.filter((collect) => collect.name != collectionName)
    },
    removeAnimeFromCollection: (state, action) => {
      const { animeId, collectionName } = action.payload
      const collectionIdx = state.findIndex((col) => col.name == collectionName)
      state[collectionIdx].animeList = state[collectionIdx].animeList.filter((anime) => anime.id != animeId)
    },
  },
})

export const { addToCollection, removeAnimeFromCollection, createCollection, removeCollection, editCollection } =
  collectionSlice.actions
export default collectionSlice.reducer
