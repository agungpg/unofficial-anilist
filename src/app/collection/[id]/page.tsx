'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import React from 'react'
import { connect } from 'react-redux'

import AnimeCard from '@/components/AnimeCard/AnimeCard'
import InfoItem from '@/components/InfoItem'

import { collectStateType, removeCollection } from '../CollectionSlice'
import { AppTitle, FlexWrapper, Image, NavBar, Text } from '../../styeled'
import defaultCover from '../../../assets/images/collection-default.png'
function CollectionList({
  collections,
}: {
  collections: collectStateType[]
}) {
  const [collection, setCollection] = useState<collectStateType>()
  const params = useParams()
  useEffect(() => {
    const col = collections.find((col) => col.name.replaceAll(' ', '-') == params.id)

    if (col) setCollection(col)
  }, [params, collections])

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
            label='Create Date'
            value={collection?.createdAt || '-'}
          />
          <InfoItem
            label='Last Update'
            value={collection?.updatedAt || '-'}
          />
          <InfoItem
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
          {collection?.animeList?.map((anime) => <AnimeCard data={anime} />)}
        </FlexWrapper>
      </FlexWrapper>
    </>
  )
}

function mapDispatchToProps(
  dispatch: (arg0: { payload: { collectionName: string }; type: 'collectionList/removeCollection' }) => any
) {
  return {
    removeCollection: (payload: { collectionName: string }) => dispatch(removeCollection(payload)),
  }
}

function mapStateToProps(state: any) {
  return { collections: state.collections }
}
export default React.memo(connect(mapStateToProps, mapDispatchToProps)(CollectionList))
