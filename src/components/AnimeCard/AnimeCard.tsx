import React from 'react'
import { AnimeCardDiv, AnimeCardCover, AnimeCardTitle, AnimeCardMetaInfoWrapper, AnimeCardMetaInfoText, AnimeCardInfoWrapper, AnimeCardDescriptionText } from './AnimeCard.styled'
import Link from 'next/link'
import { AnimeCardPropsType } from '../../types/animeList'
import { VerticalInfoWrapper } from '@/app/styeled'

const AnimeCard = ({ data }: AnimeCardPropsType) => (<AnimeCardDiv>
  <Link href={`/anime/${data.id}`}>
    <AnimeCardCover src={data?.coverImage} />
  </Link>
  <VerticalInfoWrapper gap='4px' >
    <Link href={`/anime/${data.id}`}>
      <AnimeCardTitle>{data?.title}</AnimeCardTitle>
    </Link>
    <AnimeCardMetaInfoWrapper>
      <AnimeCardMetaInfoText><b>Release Date</b>: {data?.releaseDate}</AnimeCardMetaInfoText>
      <AnimeCardMetaInfoText><b>Status</b>: {data?.status}</AnimeCardMetaInfoText>
    </AnimeCardMetaInfoWrapper>
    <AnimeCardDescriptionText dangerouslySetInnerHTML={{__html: data?.description}}/>
  </VerticalInfoWrapper>
</AnimeCardDiv>)

export default React.memo(AnimeCard)