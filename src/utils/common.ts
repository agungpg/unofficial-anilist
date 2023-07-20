import { collectStateType } from '@/app/collection/CollectionSlice'
import { AnimeListItemTypes } from '@/types/anime'

export const arrayRange = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (value, index) => start + index * step)

export const findCollectionNameByAnimeId = (collections: collectStateType[], animeId: number) => {
  return collections.reduce((result: string[], collection: collectStateType) => {
    const isAnimeExist = collection.animeList.findIndex((anime: AnimeListItemTypes) => anime.id == animeId)

    if (isAnimeExist > -1) result.push(collection.name)
    return result
  }, [])
}
export const validateNoSpecialChar = (value: string) => {
  const regex = /^[a-zA-Z0-9\s]+$/
  return regex.test(value)
}
