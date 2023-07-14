import {  AnimeListItemTypes } from '../../types/animeList'
import React, { Fragment } from "react";
import AnimeCard from "../AnimeCard/AnimeCard";
import { AnimeLoadingList } from "../Loading/Loading";

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