export type AnimeListItemTypes =  { 
  id: string
  title: string
  releaseDate: string
  status: string
  coverImage: string
  description: string 
}
export type AnimeListDataItemResponseType = {
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