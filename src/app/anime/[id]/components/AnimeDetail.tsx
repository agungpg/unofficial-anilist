import React from "react";
import { AnimeDetailContainer } from "./AnimeDetail.styled";
import { Rating } from 'react-simple-star-rating';
import StarRatings from 'react-star-ratings';
import InfoItem from "./InfoItem";
import Genre from "./Genre";

const AnimeDetail = () => {
  return <AnimeDetailContainer>
    <div className="cover-image-wrapper">
      <img className="cover-image" src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1-CXtrrkMpJ8Zq.png" />
      </div>
      <div className="rating-wrapper">
        <span>Rating 9.15</span>
        <div className="flex">
        <StarRatings
          rating={4}
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
    <h3 className="title">ONE PIECE</h3>
    <div className="sub-info-wrapper">
      <InfoItem label="Status" value="FINISH" />
      <InfoItem label="Studio" value="FINISH" />
      <InfoItem label="Release Date" value="FINISH" />
      <InfoItem label="Last Update" value="FINISH" />
      <InfoItem label="Total Episodes" value="FINISH" />
      <InfoItem label="Duration" value="FINISH" />
    </div>
    <div className="sub-info-wrapper">
      <Genre name="Action" />
      <Genre name="Drama" />
      <Genre name="Drama" />
      <Genre name="Drama" />
      <Genre name="Drama" />
      <Genre name="Action" />
      <Genre name="Action" />
      <Genre name="Drama" />
      <Genre name="Action" />
    </div>
    <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda sit nisi exercitationem, fugit debitis rerum quaerat. Ducimus repellat odit quas beatae ratione expedita nostrum, voluptas doloribus blanditiis natus placeat error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sapiente cupiditate reprehenderit illo tenetur tempora sint consequatur exercitationem unde, natus officia aliquid accusamus praesentium, nemo inventore officiis explicabo, beatae maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero alias blanditiis ipsa accusantium! Facere eveniet assumenda ipsam animi inventore numquam, velit voluptas saepe rerum libero a consequuntur omnis rem veniam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eius exercitationem ut repellat quae natus neque itaque veritatis. Vel iure quaerat ipsum eum rem quasi labore? Doloribus quae in reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ut nostrum hic sapiente enim ducimus suscipit, ab qui, pariatur facilis temporibus mollitia, fugit odio dolorum assumenda totam voluptatem doloremque fugiat!</p>
    </div>
    
  </AnimeDetailContainer>
}

export default React.memo(AnimeDetail)