import { AnimeDetailDataResponseType, AnimeListDataItemResponseType, reviewEdge } from "../types/animeList";

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
  updatedAt: timeStamptoDate(updatedAt),
  genres,
  title: title.romaji,
  releaseDate: (startDate.day > 9 ? startDate.day  : "0"+startDate.day)+"/"+startDate.month+"/"+startDate.year,
  coverImage: coverImage.medium,
  studio: studios.edges.find(stud => stud.isMain)?.node?.name || "-",
  duration: duration+" minutes",
  totalEpisodes: episodes,
  rating: getAverageRatingInFive(reviews)
})

const timeStamptoDate = (timestamp: number) => {

  const date = new Date(timestamp);
 return date.toLocaleString('en-ID'); // 👉️ "1/20/2022, 9:50:15 AM"
}

const getAverageRatingInFive = (reviews: {edges: reviewEdge[]}) => {
  if(reviews?.edges?.length == 0) return 0
  const averageRatingInHundred =  (reviews?.edges.reduce((result, item) => result += item.node.rating, 0)/reviews?.edges.length)
  const ratingInFive = averageRatingInHundred / 20
  return roundToTwo(ratingInFive)
}

function roundToTwo(num: number) {
  return +(Math.round(parseFloat(num  + "e+2"))  + "e-2");
}