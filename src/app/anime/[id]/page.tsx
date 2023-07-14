'use client'
import { GET_ANIMEDETAIL } from '@/queries'
import { mapAnimeDetailData, mapAnimeListItemData } from '@/utils/anime'
import { useQuery } from '@apollo/client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import AnimeDetail from './(components)/AnimeDetail'
import { AppTitle, NavBar } from '@/app/styeled'
import BackIcon from '@/assets/icons/BackIcon'
import { BackButton } from '../styled'
import Link from 'next/link'

export default function DETAIL() {
  const params = useParams()
  console.log('router: ', params)
  const [detail, setDetail] = useState<any>(null)
  const { loading, error, data } = useQuery(GET_ANIMEDETAIL, {
    variables: {
      id: params?.id || 0,
      isAdult: false,
    },
  })

  useEffect(() => {
    if (data) {
      console.log('data detail: ', data)
      const dataTransform = mapAnimeDetailData(data.Media)
      setDetail(dataTransform)
    }
  }, [data])

  console.log('data: ', detail)
  return (
    <div>
      <NavBar className='flex'>
        <Link href={'/'}>
          <BackIcon
            width='32px'
            height='32px'
            color='#fff'
          />
        </Link>
        <AppTitle>ANIME DETAIL</AppTitle>
      </NavBar>
      <AnimeDetail
        data={detail}
        isLoading={loading}
      />
    </div>
  )
}
