'use client'
import React from 'react'

import DeleteIcon from '@/assets/icons/DeleteIcon'
import AnimeCard from '@/components/AnimeCard/AnimeCard'
import { AnimeListItemTypes } from '@/types/animeList'

import { FlexWrapper } from '../../styeled'
function CollectionAnimeCard({ data, onDelete }: { data: AnimeListItemTypes; onDelete: () => void }) {
  return (
    <FlexWrapper>
      <AnimeCard data={data} />
      <FlexWrapper
        border='2px red solid'
        height='170px !important'
        width='5%'
        alignItems='center'
        justifyContent='center'
      >
        <button onClick={onDelete}>
          <DeleteIcon />
        </button>
      </FlexWrapper>
    </FlexWrapper>
  )
}

export default React.memo(CollectionAnimeCard)
