import React from 'react'

import InfoItem from '@/app/anime/(components)/InfoItem'
import { FlexWrapper, Image, ListItemCard } from '@/app/styeled'
import coverDefault from '@/assets/images/collection-cover-default.jpg'
import { AnimeCardTitle } from '@/components/AnimeCard/AnimeCard.styled'

const CollectionCardOption = ({ data, selected, onSelect }: any) => {
  const coverImg = data?.animeList[0]?.coverImage || coverDefault.src
  return (
    <ListItemCard
      height='84px'
      backgroundColor='#f0f0f0'
      onClick={() => onSelect(data?.name)}
    >
      <Image
        alt='cover collection'
        width='60px'
        height='60px'
        src={coverImg}
      />
      <FlexWrapper
        margin='0 0 0 10px'
        direction='column'
        alignItems='left'
        justifyContent='top'
      >
        <AnimeCardTitle>{data?.name}</AnimeCardTitle>
        <InfoItem
          label='Total'
          value={data.animeList?.length}
        />
      </FlexWrapper>
      <input
        onChange={() => onSelect(data?.name)}
        checked={selected}
        type='checkbox'
      />
    </ListItemCard>
  )
}

export default React.memo(CollectionCardOption)
