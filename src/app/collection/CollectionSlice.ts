import { createSlice } from '@reduxjs/toolkit'

import { AnimeListItemTypes } from '@/types/animeList'

export type collectStateType = {
  name: string
  createdAt: string
  updatedAt: string
  animeList: AnimeListItemTypes[]
}

const initialCollectState: collectStateType[] = [
  {
    name: 'naruto movie',
    createdAt: new Date().toUTCString(),
    updatedAt: new Date().toUTCString(),
    animeList: [
      {
        coverImage: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1-CXtrrkMpJ8Zq.png',
        description:
          'Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.<br><br>\nWhile traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?',
        id: 1,
        releaseDate: '03/4/1998',
        status: 'FINISHED',
        title: 'Cowboy Bebop',
      },
    ],
  },
]

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
