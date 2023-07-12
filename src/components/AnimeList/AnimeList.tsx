import { AnimeListDataItemResponseType, AnimeListItemTypes, PageInfoType } from "@/types/AnimeList";
import composeAnimeListData from "@/utils/composeAnimeListData";
import { gql, useQuery } from "@apollo/client";
import React, { Fragment, useEffect, useState } from "react";
import AnimeCard from "../AnimeCard/AnimeCard";
import { AnimeLoadingList } from "../Loading/Loading";

const GET_ANIMELIST = gql`
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
  result: Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    list: media (id: $id, search: $search) {
      id
      coverImage {
        medium
      }
      title{
        romaji
      }
      description
      startDate {
        year
        month
        day
      }
      status
    }
  }
}
`;

const AnimeList = ({pageInfo, setPageInfo}: {pageInfo: PageInfoType, setPageInfo: (pageInfo: PageInfoType) => void}) => {
  const [list, setList] = useState<AnimeListItemTypes[]>([])
  const { loading, error, data } = useQuery(GET_ANIMELIST, {
    variables: {
      page: pageInfo.currentPage,
      perPage: pageInfo.perPage,
    }
  });
  
  useEffect(() => {
    if(data) {
      setList(data.result.list.map((item: AnimeListDataItemResponseType) => composeAnimeListData(item)))
      if(!pageInfo.isSetFromBE) setPageInfo({...data.result.pageInfo, isSetFromBE: true} as PageInfoType)
    }
  }, [data])
  if(loading) return <AnimeLoadingList total={5} /> 
  return (
    <Fragment>
    {list.map((item: AnimeListItemTypes) => <AnimeCard key={item.id} data={item} />)}
    </Fragment>
  )
}

export default React.memo(AnimeList)