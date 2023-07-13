import React from "react";
import { AnimeDetailContainer } from "./AnimeDetail.styled";
import { Rating } from 'react-simple-star-rating';
import StarRatings from 'react-star-ratings';
import InfoItem from "./InfoItem";
import Genre from "./Genre";
import { AnimeDetailDataTypes } from "@/types/animeList";
import { infoList } from "../contants";
import { AnimeCardDescriptionText } from "@/components/AnimeCard/AnimeCard.styled";

const AnimeDetail = ({ data, isLoading }: {data: AnimeDetailDataTypes, isLoading: boolean}) => {

  if(isLoading || !data) return <></>

  return <AnimeDetailContainer>
    <div className="cover-image-wrapper">
      <img className="cover-image" src={data.coverImage} />
      </div>
      <div className="rating-wrapper">
        <span>Rating {data.rating}</span>
        <div className="flex">
        <StarRatings
          rating={data.rating}
          starRatedColor="#FEC702"
          starSpacing="2px"
          numberOfStars={5}
          starDimension="24px"
          name='rating'
        />
        </div>
      </div>
    <button className="collect-btn">Collect</button>
    <div className="flex-column-wrapper w-full">
    <h3 className="title">{data.title}</h3>
    <div className="sub-info-wrapper">
      {infoList.map(item => (<InfoItem key={item.key} label={item.label} value={(data as any)[item.key] || "-"} />))}
    </div>
    <div className="sub-info-wrapper">
      {data.genres.map(item => (<Genre key={item} name={item} />))}
    </div>
    <p className="description" dangerouslySetInnerHTML={{__html: data?.description}}></p>
    </div>
    
  </AnimeDetailContainer>
}

export default React.memo(AnimeDetail)