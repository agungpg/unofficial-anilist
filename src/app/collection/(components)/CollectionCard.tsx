import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import InfoItem from '@/app/anime/[id]/(components)/InfoItem'
import { FlexWrapper, Image as CustomeImg, ListItemCard, VerticalInfoWrapper } from '@/app/styeled'
import DeleteIcon from '@/assets/icons/DeleteIcon'
import EditIcon from '@/assets/icons/EditIcon'
import { AnimeCardTitle } from '@/components/AnimeCard/AnimeCard.styled'

import { collectStateType } from '../CollectionSlice'
import dcoverDefault from '../../../assets/images/collection-default.png'

const CollectionCard = ({
  data,
  onDelete,
  onEdit,
}: {
  data: collectStateType
  onDelete: (name: string) => void
  onEdit: (name: string) => void
}) => {
  return (
    <ListItemCard>
      <Link href={`/collection/${data.name}`}>
        {data?.animeList.length > 0 ? (
          <CustomeImg src={data?.animeList[0].coverImage} />
        ) : (
          <Image
            src={dcoverDefault}
            alt='default cover'
            width={100}
            height={120}
          />
        )}
      </Link>
      <FlexWrapper justifyContent='space-between'>
        <VerticalInfoWrapper
          width='100%'
          gap='8px'
        >
          <Link href={`/collection/${data.name}`}>
            <AnimeCardTitle>{data.name}</AnimeCardTitle>
          </Link>
          <VerticalInfoWrapper gap='0'>
            <InfoItem
              label='Create Date'
              value={data.createdAt}
            />
            <InfoItem
              label='Last Update'
              value={data.updatedAt}
            />
            <InfoItem
              label='Total'
              value={String(data.animeList.length || 0)}
            />
          </VerticalInfoWrapper>
        </VerticalInfoWrapper>
        <FlexWrapper
          alignItems='end'
          direction='column'
          justifyContent='top'
          gap='8px'
        >
          <button onClick={() => onDelete(data.name)}>
            <DeleteIcon fill='#fff' />
          </button>
          <button onClick={() => onDelete(data.name)}>
            <EditIcon fill='#fff' />
          </button>
        </FlexWrapper>
      </FlexWrapper>
    </ListItemCard>
  )
}

export default React.memo(CollectionCard)
