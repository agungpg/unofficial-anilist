import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import InfoItem from '@/app/anime/[id]/(components)/InfoItem'
import { FlexWrapper, Image as CustomImg, ListItemCard, VerticalInfoWrapper } from '@/app/styeled'
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
      <FlexWrapper
        width='140px'
        justifyContent='center'
        alignItems='center'
        direction='column'
        gap='8px'
      >
        <Link href={`/collection/${data?.name?.replaceAll(' ', '-')}`}>
          {data?.animeList.length > 0 ? (
            <CustomImg src={data?.animeList[0].coverImage} />
          ) : (
            <Image
              src={dcoverDefault}
              alt='default cover'
              width={100}
              height={120}
            />
          )}
        </Link>
        <FlexWrapper
          alignItems='center'
          direction='row'
          justifyContent='space-around'
          gap='8px'
        >
          <button onClick={() => onDelete(data?.name)}>
            <DeleteIcon fill='#fff' />
          </button>
          <button onClick={() => onDelete(data?.name)}>
            <EditIcon fill='#fff' />
          </button>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper justifyContent='space-between'>
        <VerticalInfoWrapper
          width='100%'
          gap='8px'
        >
          <Link href={`/collection/${data?.name?.replaceAll(' ', '-')}`}>
            <AnimeCardTitle>{data?.name}</AnimeCardTitle>
          </Link>
          <VerticalInfoWrapper gap='0'>
            <InfoItem
              label='Create Date'
              value={data?.createdAt}
            />
            <InfoItem
              label='Last Update'
              value={data?.updatedAt}
            />
            <InfoItem
              label='Total'
              value={String(data?.animeList?.length || 0)}
            />
          </VerticalInfoWrapper>
        </VerticalInfoWrapper>
      </FlexWrapper>
    </ListItemCard>
  )
}

export default React.memo(CollectionCard)
