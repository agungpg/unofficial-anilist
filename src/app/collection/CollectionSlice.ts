import { createSlice } from '@reduxjs/toolkit'

import { AnimeListItemTypes } from '@/types/animeList'

export type collectStateType = {
  name: string
  coverImage: string
  createdAt: string
  updatedAt: string
  animeList: AnimeListItemTypes[]
}

const initialCollectState: collectStateType[] = [
  {
    name: 'naruto movie',
    coverImage: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx22-8Qg3NZXH6asP.png',
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
      const { collectionList, animeList } = action.payload

      return state.map((collection) => {
        if (collectionList.includes(collection.name)) {
          return {
            ...collection,
            animeList: collection.animeList.concat(animeList),
          }
        }
        return collection
      })
    },
    removeFromCollection: (state, action) => {
      return state.filter((collection) => collection.name !== action.payload.name)
    },
  },
})

export const { addToCollection, removeFromCollection } = collectionSlice.actions
export default collectionSlice.reducer
