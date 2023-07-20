import Link from 'next/link'
import React from 'react'

import InfoItem from '@/app/anime/(components)/InfoItem'
import { FlexWrapper, Image as CustomImg, ListItemCard, VerticalInfoWrapper } from '@/app/styeled'
import DeleteIcon from '@/assets/icons/DeleteIcon'
import EditIcon from '@/assets/icons/EditIcon'
import { AnimeCardTitle } from '@/components/AnimeCard/AnimeCard.styled'

import { collectStateType } from '../CollectionSlice'
import dcoverDefault from '../../../assets/images/collection-default.png'
import moment from 'moment'

const CollectionCard = ({
  data,
  onDelete,
  onEdit,
}: {
  data: collectStateType
  onDelete: (name: string) => void
  onEdit?: (name: string) => void
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
        <Link href={`/collection?name=${data?.name?.replaceAll(' ', '-')}`}>
          <CustomImg alt='cover-collection' src={data?.animeList.length > 0 ? data?.animeList[0].coverImage : dcoverDefault.src} />
        </Link>
        <FlexWrapper
          alignItems='center'
          direction='row'
          justifyContent='space-around'
          gap='8px'
        >
          <button aria-label='delete-button' onClick={() => onDelete(data?.name)}>
            <DeleteIcon fill='#fff' />
          </button>
          <button
            aria-label='edit-button'
            onClick={() => {
              if (onEdit) onEdit(data?.name)
            }}
          >
            <EditIcon fill='#fff' />
          </button>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper justifyContent='space-between'>
        <FlexWrapper
          direction='column'
          width='100%'
          gap='8px'
            justifyContent='flex-start'
            alignItems='left'
        >
          <Link href={`/collection?name=${data?.name?.replaceAll(' ', '-')}`}>
            <AnimeCardTitle>{data?.name}</AnimeCardTitle>
          </Link>
          <VerticalInfoWrapper gap='2px'>
            <InfoItem
              label='Create Date'
              value={moment(data?.createdAt).format('DD MMM YYYY')}
            />
            <InfoItem
              label='Last Update'
              value={moment(data?.updatedAt).format('DD MMM YYYY')}
            />
            <InfoItem
              label='Total Collections'
              value={String(data?.animeList?.length || 0)}
            />
          </VerticalInfoWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </ListItemCard>
  )
}

export default React.memo(CollectionCard)
