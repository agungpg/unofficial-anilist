'use client'
import { useQuery } from '@apollo/client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { AppTitle, NavBar } from '@/app/styeled'
import BackIcon from '@/assets/icons/BackIcon'
import { GET_ANIMEDETAIL } from '@/queries'
import { mapAnimeDetailData } from '@/utils/anime'

import AnimeDetail from './(components)/AnimeDetail'

export default function DETAIL({ searchParams }: { searchParams: { id: string } }) {
  const [detail, setDetail] = useState<any>(null)

  const { loading, error, data } = useQuery(GET_ANIMEDETAIL, {
    variables: {
      id: searchParams.id || 0,
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

  return (
    <div>
      <NavBar className='flex'>
        <Link href='/'>
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
