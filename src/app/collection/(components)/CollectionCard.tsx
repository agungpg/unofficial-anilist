import Link from 'next/link'
import React from 'react'

import InfoItem from '@/app/anime/[id]/(components)/InfoItem'
import { Image, ListItemCard, VerticalInfoWrapper } from '@/app/styeled'
import {
  AnimeCardTitle,
} from '@/components/AnimeCard/AnimeCard.styled'

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
            <AnimeCardTitle>Action And Drama</AnimeCardTitle>
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
