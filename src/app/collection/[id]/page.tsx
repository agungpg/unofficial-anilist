'use client'
import moment from 'moment'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import BackIcon from '@/assets/icons/BackIcon'
import AnimeCard from '@/components/AnimeCard/AnimeCard'
import InfoItem from '@/components/InfoItem'
import ModalDeleteConfirmation from '@/components/ModalDeleteConfirmation'
import { AnimeListItemTypes } from '@/types/anime'

import { collectStateType, removeAnimeFromCollection } from '../CollectionSlice'
import { AppTitle, Button, FlexWrapper, Image, NavBar, Text } from '../../styeled'
import defaultCover from '../../../assets/images/collection-default.png'

function CollectionDetail() {
  const [collection, setCollection] = useState<collectStateType>()
  const dispatch = useDispatch()
  const router = useRouter()
  const searchParams = useSearchParams()
  const name = searchParams?.get('name')
  const collections = useSelector((state: any) => state.collections)
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState<boolean>(false)
  const [animeSelected, setAnimeSelected] = useState<AnimeListItemTypes | null>(null)

  useEffect(() => {
    const col = collections.find((col: collectStateType) => col.name.replaceAll(' ', '-') === name)

    if (col) setCollection(col)
  }, [name, collections])

  const onDelete = (anime: AnimeListItemTypes) => {
    setAnimeSelected(anime)
    setIsModalDeleteOpen(true)
  }

  const onDeleteConfirm = () => {
    if (!animeSelected?.id) return

    dispatch(
      removeAnimeFromCollection({
        animeId: animeSelected.id,
        collectionName: collection?.name || '',
      })
    )
    setIsModalDeleteOpen(false)
    setAnimeSelected(null)
  }

  return (
    <>
      <NavBar>
        <FlexWrapper justifyContent='left'>
          <Button
            onClick={router.back}
            border='none'
          >
            <BackIcon
              width='32px'
              height='32px'
              color='#fff'
            />
          </Button>
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
            alt='cover collection'
            height='200px'
            width='160px'
            src={defaultCover.src}
          />
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
            label='Total Collections'
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
            <AnimeCard
              onDelete={() => onDelete(anime)}
              data={anime}
              key={anime.title}
            />
          ))}
        </FlexWrapper>
      </FlexWrapper>
      <ModalDeleteConfirmation
        isOpen={isModalDeleteOpen}
        closeModal={() => setIsModalDeleteOpen(false)}
        onConfirm={onDeleteConfirm}
        title={`Are you sure you want to delete "${animeSelected?.title}"?`}
      />
    </>
  )
}

export default CollectionDetail
