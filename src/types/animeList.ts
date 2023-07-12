export type AnimeListItemTypes =  { 
  id: string
  title: string
  releaseDate: string
  status: string
  coverImage: string
  description: string 
}
export interface AnimeListDataItemResponseType {
  id: string, 
  title: {
    romaji: string
  }, 
  description: string, 
  startDate: {
    day: number
    month: number
    year: number
  }, 
  status: string, 
  coverImage: { medium: string}
}

type studioEdges = {
  "id": number,
  "isMain": boolean,
  "node": {
      "name": string,
  }
}

type reviewEdge = {
  node:  {
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
  reviews:  {
    edges: reviewEdge[] 
  }
}

export type AnimeCardPropsType = {
  data: AnimeListItemTypes
}

export type PageInfoType = {
  "total": number,
  "currentPage": number,
  "lastPage": number,
  "hasNextPage": boolean,
  "perPage": number,
  isSetFromBE?: boolean;
}