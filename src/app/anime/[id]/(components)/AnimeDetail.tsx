import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import StarRatings from 'react-star-ratings'

import ModalCollectionList from '@/app/collection/(components)/ModalCollectionList'
import ModalCreateCollection from '@/app/collection/(components)/ModalCreateCollection'
import { collectStateType } from '@/app/collection/CollectionSlice'
import { FlexWrapper, Text } from '@/app/styeled'
import AddCollectionIcon from '@/assets/icons/AddCollectionIcon'
import { AnimeDetailDataTypes } from '@/types/animeList'
import { findCollectionNameByAnimeId } from '@/utils/common'

import { AnimeDetailContainer } from './AnimeDetail.styled'
import AnimeDetailLoading from './AnimeDetailLoading'
import Genre from './Genre'
import InfoItem from './InfoItem'
import { infoList } from '../contants'

const AnimeDetail = ({
  data,
  isLoading,
  collections,
}: {
  data: AnimeDetailDataTypes
  isLoading: boolean
  collections?: collectStateType[]
}) => {
  const [isModalOpen, setIsModelOpen] = useState(false)
  const [isModalFormColOpen, setIsModalFormColOpen] = useState(false)
  const [collectionsName, setCollectionsName] = useState<string[]>([])

  useEffect(() => {
    if (!collections || !data?.id) return

    const colName = findCollectionNameByAnimeId(collections, data.id)
    if (colName) setCollectionsName(colName)
  }, [collections, data])

  const addNewCollection = () => {
    setIsModelOpen(false)
    setIsModalFormColOpen(true)
  }

  if (isLoading || !data) return <AnimeDetailLoading />

  return (
    <>
      <AnimeDetailContainer>
        <div className='cover-image-wrapper'>
          <img
            className='cover-image'
            src={data.coverImage}
          />
        </div>
        <div className='rating-wrapper'>
          <span>Rating {data.rating}</span>
          <div className='flex'>
            <StarRatings
              rating={data.rating}
              starRatedColor='#FEC702'
              starSpacing='2px'
              numberOfStars={5}
              starDimension='24px'
              name='rating'
            />
          </div>
        </div>
        <button
          className='collect-btn'
          onClick={() => setIsModelOpen(true)}
        >
          <AddCollectionIcon
            width='24px'
            height='24px'
            color='#fff'
          />
          <span>COLLECT</span>
        </button>
        <div className='flex-column-wrapper w-full'>
          <h3 className='title'>{data.title}</h3>
          <div className='sub-info-wrapper'>
            {infoList.map((item) => (
              <InfoItem
                key={item.key}
                label={item.label}
                value={(data as any)[item.key] || '-'}
              />
            ))}
          </div>
          <FlexWrapper
            direction='column'
            gap='2px'
            alignItems='start'
          >
            <Text
              fontSize='16px'
              color='#fff'
              fontWeight='600'
            >
              Genre
            </Text>
            <FlexWrapper
              wrap='wrap'
              direction='row'
              justifyContent='left'
              gap='4px'
              alignItems='start'
            >
              {data.genres.map((item) => (
                <Genre
                  key={item}
                  name={item}
                />
              ))}
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper
            direction='column'
            gap='2px'
            alignItems='start'
          >
            <Text
              fontSize='16px'
              color='#fff'
              fontWeight='600'
            >
              Collections
            </Text>
            <FlexWrapper
              direction='row'
              gap='4px'
              justifyContent='left'
              alignItems='center'
              wrap='wrap'
            >
              {collectionsName.map((item) => (
                <Link
                  key={item}
                  href={`/collection/${item.replaceAll(' ', '-')}`}
                >
                  <Genre name={item} />
                </Link>
              ))}
            </FlexWrapper>
          </FlexWrapper>
          <p
            className='description'
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />
        </div>
      </AnimeDetailContainer>
      <ModalCollectionList
        collectionsNameSelected={collectionsName}
        data={data}
        isOpen={isModalOpen}
        onAddNewCollection={addNewCollection}
        closeModal={() => setIsModelOpen(false)}
      />
      <ModalCreateCollection
        isOpen={isModalFormColOpen}
        closeModal={() => setIsModalFormColOpen(false)}
      />
    </>
  )
}
function mapStateToProps(state: any) {
  return { collections: state.collections }
}
export default React.memo(connect(mapStateToProps)(AnimeDetail))
