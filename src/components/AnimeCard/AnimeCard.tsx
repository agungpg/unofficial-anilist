import Link from 'next/link'
import React from 'react'

import { Button, FlexWrapper, Image, Text } from '@/app/styeled'
import DeleteIcon from '@/assets/icons/DeleteIcon'

import { AnimeCardDescriptionText, AnimeCardDiv, AnimeCardTitle } from './AnimeCard.styled'
import { AnimeCardPropsType } from '../../types/anime'

const AnimeCard = ({ data, onDelete }: AnimeCardPropsType) => (
  <AnimeCardDiv>
    <Link href={`/anime?id=${data.id}`}>
      <Image
        alt='cover anime'
        src={data?.coverImage}
      />
    </Link>
    <FlexWrapper
      direction='column'
      justifyContent='flex-start'
      alignItems='left'
      gap='4px'
    >
      <Link href={`/anime?id=${data.id}`}>
        <AnimeCardTitle>{data?.title}</AnimeCardTitle>
      </Link>
      <FlexWrapper
        justifyContent='flex-start'
        gap='0 5%'
      >
        <Text>
          <b>Release Date</b>: {data?.releaseDate}
        </Text>
        <Text>
          <b>Status</b>: {data?.status}
        </Text>
      </FlexWrapper>
      <AnimeCardDescriptionText dangerouslySetInnerHTML={{ __html: data?.description }} />
    </FlexWrapper>
    {onDelete && (
      <Button
        border='none'
        aria-label='delete-button'
        onClick={() => onDelete(data.id)}
      >
        <DeleteIcon />
      </Button>
    )}
  </AnimeCardDiv>
)

export default React.memo(AnimeCard)
