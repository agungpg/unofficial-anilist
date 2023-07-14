
import { AnimeListDataItemResponseType } from '@/types/animeList';
import { createSlice } from '@reduxjs/toolkit';

type collectStateType = {
  id: number
  name: string
  coverImage: string
  createdAt: Date
  updatedAt: Date,
  animeList: AnimeListDataItemResponseType[]
}
const initialCollectState: collectStateType[] = [{
  id:1,
  name: "naruto movie",
  coverImage: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  animeList: []
}]

const collectionSlice = createSlice({
  name: 'collectionList',
  initialState: initialCollectState,
  reducers: {
    addToCollection: (state: collectStateType[], action) => {
      const isExist =  state.filter(collection => collection.name == action.payload.name);
      if(!isExist) state.push(action.payload);
    },
    removeFromCollection: (state, action) => {
      return state.filter(collection => collection.name !== action.payload.name);
    },
  },
});

export const { addToCollection, removeFromCollection } = collectionSlice.actions;
export default collectionSlice.reducer;