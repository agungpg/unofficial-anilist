'use client'
import { useQuery } from '@apollo/client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { AppTitle, NavBar } from '@/app/styeled'
import BackIcon from '@/assets/icons/BackIcon'
import { GET_ANIMEDETAIL } from '@/queries'
import { mapAnimeDetailData } from '@/utils/anime'

import AnimeDetail from './(components)/AnimeDetail'

export default function DETAIL() {
  const [detail, setDetail] = useState<any>(null)
  const searchParams = useSearchParams()

  const { loading, data, error, refetch } = useQuery(GET_ANIMEDETAIL, {
    variables: {
      id: searchParams?.get('id'),
      isAdult: false,
    },
  })

  useEffect(() => {
    if (searchParams?.get('id') && data && !error) {
      const dataTransform = mapAnimeDetailData(data.Media)
      setDetail(dataTransform)
    }
  }, [data, error, searchParams?.get('id')])

  useEffect(() => {
    if (searchParams?.get('id')) {
      refetch()
    }
  }, [searchParams?.get('id')])
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
