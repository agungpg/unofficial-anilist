import Link from 'next/link'
import React from 'react'

import { Button, VerticalInfoWrapper } from '@/app/styeled'
import DeleteIcon from '@/assets/icons/DeleteIcon'

import {
  AnimeCardCover,
  AnimeCardDescriptionText,
  AnimeCardDiv,
  AnimeCardMetaInfoText,
  AnimeCardMetaInfoWrapper,
  AnimeCardTitle,
} from './AnimeCard.styled'
import { AnimeCardPropsType } from '../../types/animeList'

const AnimeCard = ({ data, onDelete }: AnimeCardPropsType) => (
  <AnimeCardDiv>
    <Link href={`/anime?id=${data.id}`}>
      <AnimeCardCover alt='cover anime' src={data?.coverImage} />
    </Link>
    <VerticalInfoWrapper gap='4px'>
      <Link href={`/anime?id=${data.id}`}>
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
    {onDelete && (
      <Button
        border='none'
        onClick={() => onDelete(data.id)}
      >
        <DeleteIcon />
      </Button>
    )}
  </AnimeCardDiv>
)

export default React.memo(AnimeCard)
