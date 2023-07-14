import React from 'react'
import {
  AnimeCardCover,
  AnimeCardTitle,
  AnimeCardMetaInfoWrapper,
  AnimeCardMetaInfoText,
  AnimeCardInfoWrapper,
  AnimeCardDescriptionText,
} from '@/components/AnimeCard/AnimeCard.styled'
import Link from 'next/link'
import { AnimeCardPropsType } from '@/types/animeList'
import { Image, InfoText, ListItemCard, VerticalInfoWrapper } from '@/app/styeled'
import InfoItem from '@/app/anime/[id]/(components)/InfoItem'
import styled from '@emotion/styled'

const coverDefault = '@/assets/images/collection-cover-default.jpg'

const CollectionCard = () =>
  // { data }: AnimeCardPropsType
  {
    const data: any = {}
    return (
      <ListItemCard>
        <Link href={`/collection/${data.id}`}>
          <Image src={data?.coverImage || coverDefault} />
        </Link>
        <VerticalInfoWrapper gap='8px'>
          <Link href={`/anime/${data.id}`}>
            <AnimeCardTitle>{'Action And Drama'}</AnimeCardTitle>
          </Link>
          <VerticalInfoWrapper gap='0'>
            <InfoItem
              label='Create Date'
              value='20/12/2022'
            />
            <InfoItem
              label='Last Update'
              value='20/05/2023'
            />
            <InfoItem
              label='Total'
              value='5'
            />
          </VerticalInfoWrapper>
        </VerticalInfoWrapper>
      </ListItemCard>
    )
  }

export default React.memo(CollectionCard)
