import React from 'react'
import { AnimeCardDiv, AnimeCardCover, AnimeCardTitle, AnimeCardMetaInfoWrapper, AnimeCardMetaInfoText, AnimeCardInfoWrapper, AnimeCardDescriptionText } from './AnimeCard.styled'
import Link from 'next/link'
import { AnimeCardPropsType } from '../../types/animeList'

const AnimeCard = ({ data }: AnimeCardPropsType) => (<AnimeCardDiv>
  <Link href={`/anime/${data.id}`}>
    <AnimeCardCover src={data?.coverImage} />
  </Link>
  <AnimeCardInfoWrapper >
    <Link href={`/anime/${data.id}`}>
      <AnimeCardTitle>{data?.title || 'One Piece'}</AnimeCardTitle>
    </Link>
    <AnimeCardMetaInfoWrapper>
      <AnimeCardMetaInfoText><b>Release Date</b>: {data?.releaseDate || 'July 2015'}</AnimeCardMetaInfoText>
      <AnimeCardMetaInfoText><b>Status</b>: {data?.status || 'On Going'}</AnimeCardMetaInfoText>
    </AnimeCardMetaInfoWrapper>
    <AnimeCardDescriptionText dangerouslySetInnerHTML={{__html: data?.description}}/>
  </AnimeCardInfoWrapper>
</AnimeCardDiv>)

export default React.memo(AnimeCard)