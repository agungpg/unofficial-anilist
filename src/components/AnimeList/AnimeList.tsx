import { AnimeListDataItemResponseType, AnimeListItemTypes, PageInfoType } from '../../types/animeList'
import composeAnimeListData from "@/utils/anime";
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

const AnimeList = (
  { data, isLoading}: {data: AnimeListItemTypes[], isLoading: boolean}
  ) => {
  if(isLoading) return <AnimeLoadingList total={5} /> 
  return (
    <Fragment>
    {data.map((item: AnimeListItemTypes) => <AnimeCard key={item.id} data={item} />)}
    </Fragment>
  )
}

export default React.memo(AnimeList)