export interface AnimeListItemTypes {
  id: number
  title: string
  releaseDate: string
  status: string
  coverImage: string
  description: string
}
export interface AnimeDetailDataTypes extends AnimeListItemTypes {
  studio: string
  duration: string
  totalEpisodes: number
  rating: number
  genres: string[]
  updatedAt: string
}
export interface AnimeListDataItemResponseType {
  id: string
  title: {
    romaji: string
  }
  description: string
  startDate: {
    day: number
    month: number
    year: number
  }
  status: string
  coverImage: { medium: string }
}

type studioEdges = {
  id: number
  isMain: boolean
  node: {
    name: string
  }
}

export type reviewEdge = {
  node: {
    id: number
    rating: number
  }
}
export interface AnimeDetailDataResponseType extends AnimeListDataItemResponseType {
  studios: {
    edges: studioEdges[]
  }
  duration: number
  updatedAt: number
  genres: string[]
  averageScore: number
  episodes: number
  reviews: {
    edges: reviewEdge[]
  }
}

export type AnimeCardPropsType = {
  data: AnimeListItemTypes
  onDelete?: (id: number) => void
}

export type PageInfoType = {
  total: number
  currentPage: number
  lastPage: number
  hasNextPage: boolean
  perPage: number
  isSetFromBE?: boolean
}
