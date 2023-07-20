import React from 'react'
import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'

import { AnimeCardDiv } from '../AnimeCard/AnimeCard.styled'
import { FlexWrapper } from '@/app/styeled'

export const DescriptionLineLoading = () => <Skeleton style={{ height: '10px', width: '95%', borderRadius: '8px' }} />
export const AnimeLoadingCard = () => (
  <AnimeCardDiv>
    <Skeleton
      style={{
        height: '130px',
        width: '100px',
        borderRadius: 0,
      }}
    />
    <FlexWrapper direction='column' justifyContent='flex-start' alignItems='left'>
      <Skeleton
        style={{
          height: '18px',
          width: '30%',
          borderRadius: '8px',
        }}
      />
      <Skeleton
        style={{
          height: '16px',
          width: '20%',
          borderRadius: '8px',
        }}
      />
      <div className='gap-y-[0px] mt-2'>
        <DescriptionLineLoading />
        <DescriptionLineLoading />
        <DescriptionLineLoading />
      </div>
    </FlexWrapper>
  </AnimeCardDiv>
)

export const AnimeLoadingList = ({ total }: { total: number }) =>
  Array.from(Array(total).keys()).map((item) => <AnimeLoadingCard key={item * Math.random()} />)
