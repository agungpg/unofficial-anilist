import Link from 'next/link'
import React from 'react'

import { VerticalInfoWrapper } from '@/app/styeled'

import {
  AnimeCardCover,
  AnimeCardDescriptionText,
  AnimeCardDiv,
  AnimeCardMetaInfoText,
  AnimeCardMetaInfoWrapper,
  AnimeCardTitle,
} from './AnimeCard.styled'
import { AnimeCardPropsType } from '../../types/animeList'

const AnimeCard = ({ data }: AnimeCardPropsType) => (
  <AnimeCardDiv>
    <Link href={`/anime/${data.id}`}>
      <AnimeCardCover src={data?.coverImage} />
    </Link>
    <VerticalInfoWrapper gap='4px'>
      <Link href={`/anime/${data.id}`}>
        <AnimeCardTitle>{data?.title}</AnimeCardTitle>
      </Link>
      <AnimeCardMetaInfoWrapper>
        <AnimeCardMetaInfoText>
          <b>Release Date</b>: {data?.releaseDate}
        </AnimeCardMetaInfoText>
        <AnimeCardMetaInfoText>
          <b>Status</b>: {data?.status}
        </AnimeCardMetaInfoText>
      </AnimeCardMetaInfoWrapper>
      <AnimeCardDescriptionText dangerouslySetInnerHTML={{ __html: data?.description }} />
    </VerticalInfoWrapper>
  </AnimeCardDiv>
)

export default React.memo(AnimeCard)
