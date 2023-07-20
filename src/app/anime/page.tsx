'use client'
import { useQuery } from '@apollo/client'
import Head from 'next/head'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { AppTitle, Button, NavBar } from '@/app/styeled'
import BackIcon from '@/assets/icons/BackIcon'
import { GET_ANIMEDETAIL } from '@/queries'
import { mapAnimeDetailData } from '@/utils/anime'

import AnimeDetail from './(components)/AnimeDetail'

export default function DETAIL() {
  const [detail, setDetail] = useState<any>(null)
  const searchParams = useSearchParams()
  const router = useRouter()

  const { loading, data, error } = useQuery(GET_ANIMEDETAIL, {
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

  return (
    <div>
      <Head>
        <title>ANIME DETAIL</title>
      </Head>
      <NavBar className='flex'>
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
        <AppTitle>ANIME DETAIL</AppTitle>
      </NavBar>
      <AnimeDetail
        data={detail}
        isLoading={loading}
      />
    </div>
  )
}
