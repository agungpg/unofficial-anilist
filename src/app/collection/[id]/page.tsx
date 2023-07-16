'use client'
import moment from 'moment'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import InfoItem from '@/components/InfoItem'
import ModalDeleteConfirmation from '@/components/ModalDeleteConfirmation'
import { AnimeListItemTypes } from '@/types/animeList'

import CollectionAnimeCard from '../(components)/CollectionAnimeCard'
import { collectStateType, removeAnimeFromCollection, removeCollection } from '../CollectionSlice'
import { AppTitle, FlexWrapper, Image, NavBar, Text } from '../../styeled'
import defaultCover from '../../../assets/images/collection-default.png'
function CollectionList({
  collections,
  removeAnimeFromCollection,
}: {
  collections: collectStateType[]
  removeAnimeFromCollection: (payload: { animeId: number; collectionName: string }) => void
}) {
  const [collection, setCollection] = useState<collectStateType>()
  const params = useParams()
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState<boolean>(false)
  const [animeSelected, setAnimeSelected] = useState<AnimeListItemTypes | null>(null)

  useEffect(() => {
    const col = collections.find((col) => col.name.replaceAll(' ', '-') == params.id)

    if (col) setCollection(col)
  }, [params, collections])

  const onDelete = (anime: AnimeListItemTypes) => {
    setAnimeSelected(anime)
    setIsModalDeleteOpen(true)
  }

  const onDeleteConfirm = () => {
    if (!animeSelected?.id) return

    removeAnimeFromCollection({
      animeId: animeSelected.id,
      collectionName: collection?.name || '',
    })
    setIsModalDeleteOpen(false)
    setAnimeSelected(null)
  }
  return (
    <>
      <NavBar>
        <FlexWrapper>
          <AppTitle>COLLECTION DETAIL</AppTitle>
        </FlexWrapper>
      </NavBar>
      <FlexWrapper
        wrap='wrap'
        margin='16px 0 0 0'
        direction='row'
        alignItems='top'
        justifyContent='start'
        gap='2%'
      >
        <FlexWrapper
          backgroundColor='#222222'
          padding='12px'
          smWidth='100% !important'
          mdWidth='100% !important'
          lgWidth='40% !important'
          width='25% !important'
          direction='column'
          gap='8px'
          height='70%'
          justifyContent='center'
          alignItems='center'
        >
          <Image
            height='200px'
            width='160px'
            src={defaultCover.src}
          />{' '}
          <Text
            color='#fff'
            fontSize='24px'
            fontWeight='bold'
          >
            {collection?.name || ''}
          </Text>
          <InfoItem
            textAlign='center'
            isVertical
            label='Create Date'
            value={moment(collection?.createdAt).format('DD MMM YYYY') || '-'}
          />
          <InfoItem
            textAlign='center'
            isVertical
            label='Last Update'
            value={moment(collection?.updatedAt).format('DD MMM YYYY') || '-'}
          />
          <InfoItem
            textAlign='center'
            isVertical
            label='Total'
            value={String(collection?.animeList?.length || 0)}
          />
        </FlexWrapper>

        <FlexWrapper
          backgroundColor='#222222'
          smWidth='100% !important'
          mdWidth='100% !important'
          lgWidth='58% !important'
          width='73% !important'
          direction='column'
        >
          {collection?.animeList?.map((anime) => (
            <CollectionAnimeCard
              onDelete={() => onDelete(anime)}
              data={anime}
              key={anime.title}
            />
          ))}
        </FlexWrapper>
      </FlexWrapper>
      <ModalDeleteConfirmation
        isOpen={isModalDeleteOpen}
        closeModal={function (): void {
          throw new Error('Function not implemented.')
        }}
        onConfirm={onDeleteConfirm}
        title={`Are you sure want to delete "${animeSelected?.title}"?`}
      />
    </>
  )
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    removeCollection: (payload: { collectionName: string }) => dispatch(removeCollection(payload)),
    removeAnimeFromCollection: (payload: { animeId: number; collectionName: string }) =>
      dispatch(removeAnimeFromCollection(payload)),
  }
}

function mapStateToProps(state: any) {
  return { collections: state.collections }
}
export default React.memo(connect(mapStateToProps, mapDispatchToProps)(CollectionList))
