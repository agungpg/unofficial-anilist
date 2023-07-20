import moment from 'moment'

import { AnimeDetailData, AnimeDetailDataResponseType, AnimeListDataItemResponseType, reviewEdge } from '../types/anime'

export const mapAnimeListItemData = ({
  id,
  title,
  description,
  startDate,
  status,
  coverImage,
}: AnimeListDataItemResponseType) => ({
  id,
  status,
  description,
  title: title.romaji,
  releaseDate: moment(
    (startDate.day > 9 ? startDate.day : '0' + startDate.day) + '/' + startDate.month + '/' + startDate.year
  ).format('DD MMM YYYY'),
  coverImage: coverImage.medium,
})

export const mapAnimeDetailData = ({
  id,
  title,
  description,
  startDate,
  status,
  coverImage,
  studios,
  duration,
  updatedAt,
  genres,
  episodes,
  reviews,
}: AnimeDetailDataResponseType): AnimeDetailData => ({
  id,
  status,
  description,
  updatedAt: moment(updatedAt).format('DD MMM YYYY'),
  genres,
  title: title.romaji,
  releaseDate: moment(
    (startDate.day > 9 ? startDate.day : '0' + startDate.day) + '/' + startDate.month + '/' + startDate.year
  ).format('DD MMM YYYY'),
  coverImage: coverImage?.large || '',
  studio: studios.edges.find((stud) => stud.isMain)?.node?.name || '-',
  duration: duration + ' minutes',
  totalEpisodes: episodes,
  rating: getAverageRatingInFive(reviews),
})

const timeStamptoDate = (timestamp: number) => {
  const date = new Date(timestamp)
  return date.toLocaleString('en-ID') // 👉️ "1/20/2022, 9:50:15 AM"
}

const getAverageRatingInFive = (reviews: { edges: reviewEdge[] }) => {
  if (reviews?.edges?.length == 0) return 0
  const averageRatingInHundred =
    reviews?.edges.reduce((result, item) => (result += item.node.rating), 0) / reviews?.edges.length
  const ratingInFive = averageRatingInHundred / 20
  return roundToTwo(ratingInFive)
}

function roundToTwo(num: number) {
  return +(Math.round(parseFloat(num + 'e+2')) + 'e-2')
}
