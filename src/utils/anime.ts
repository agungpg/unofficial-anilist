import { AnimeDetailDataResponseType, AnimeListDataItemResponseType } from "../types/animeList";

export const mapAnimeListItemData =  ({ id, title, description, startDate, status, coverImage }: AnimeListDataItemResponseType) => ({
  id,
  status,
  description,
  title: title.romaji,
  releaseDate: (startDate.day > 9 ? startDate.day  : "0"+startDate.day)+"/"+startDate.month+"/"+startDate.year,
  coverImage: coverImage.medium
})

export const mapAnimeDetailData =  ({ id, title, description, startDate, status, coverImage, studios, duration, updatedAt, genres, episodes, averageScore, reviews }: AnimeDetailDataResponseType) => ({
  id,
  status,
  description,
  updatedAt,
  genres,
  title: title.romaji,
  releaseDate: (startDate.day > 9 ? startDate.day  : "0"+startDate.day)+"/"+startDate.month+"/"+startDate.year,
  coverImage: coverImage.medium,
  studio: studios.edges.find(stud => stud.isMain)?.node?.name || "-",
  duration: duration+" minutes",
  totalEpisodes: episodes,
  rating: (reviews?.edges.reduce((result, item) => result += item.node.rating, 0)/reviews?.edges.length) || 0
})