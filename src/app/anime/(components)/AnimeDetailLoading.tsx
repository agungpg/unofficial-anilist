import React from 'react'
import Skeleton from 'react-loading-skeleton'
import StarRatings from 'react-star-ratings'

import { DescriptionLineLoading } from '@/components/Loading/Loading'

import { AnimeDetailContainer, DetailBodyInfoWrapper, GenresWrapper, InfoWrapper } from './AnimeDetail.styled'
import { infoList } from '../constants'

const AnimeDetailLoading = () => {
  return (
    <AnimeDetailContainer>
      <div className='cover-image-wrapper'>
        <Skeleton className='cover-image' />
      </div>

      <div className='rating-wrapper'>
        <Skeleton style={{ width: 100, height: 18 }} />
        <div className='flex'>
          <StarRatings
            rating={0}
            starRatedColor='#FEC702'
            starSpacing='2px'
            numberOfStars={5}
            starDimension='24px'
            name='rating'
          />
        </div>
      </div>
      <Skeleton style={{ width: '100%', height: 32 }} />
      <DetailBodyInfoWrapper>
        <div className='title-wrapper'>
          <Skeleton style={{ width: '60%', height: 24 }} />
        </div>
        <InfoWrapper>
          {infoList.map((item) => (
            <Skeleton
              key={item.key}
              style={{ width: '100%', height: '24px', margin: '0 12px 0 0' }}
            />
          ))}
        </InfoWrapper>
        <GenresWrapper>
          {[1, 2, 3, 4, 5].map((item) => (
            <Skeleton
              key={item * Math.random()}
              style={{ width: '40px', height: '24px', margin: '4px' }}
            />
          ))}
        </GenresWrapper>
        <div>
          {[1, 2, 3].map((item) => (
            <DescriptionLineLoading key={item * Math.random()} />
          ))}
        </div>
      </DetailBodyInfoWrapper>
    </AnimeDetailContainer>
  )
}

export default React.memo(AnimeDetailLoading)
