'use client'
import { useQuery } from '@apollo/client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { AppTitle, NavBar } from '@/app/styeled'
import BackIcon from '@/assets/icons/BackIcon'
import { GET_ANIMEDETAIL, GET_ANIMELIST } from '@/queries'
import { mapAnimeDetailData } from '@/utils/anime'

import AnimeDetail from './(components)/AnimeDetail'
import { AnimeListDataItemResponseType } from '@/types/animeList'
import { client } from '@/configs/ApolloClientProvider'

const getAllAnimeList = async (page: number) => {
  const { data, loading, error } = await client.query({
    query: GET_ANIMELIST,
    variables: {
      page: page,
      perPage: 10,
      isAdult: false
    },
  });

  return data
}

export async function generateStaticParams() {
    const data = await Promise.all(Array.from({length: 50}, (x, i) => i).map(idx => getAllAnimeList(idx+1)))
    
    const paramsList =data?.reduce((result, item) => {
      const arr = item.result.list.map((anime: any) => ({id: anime.id}))
      result = [...result, ...arr]
      return result
    }, [])
    console.log("paramsList: ", paramsList)
  return paramsList
  }

export default function DETAIL({params: {id}}: {params: {id: string}}) {
  const [detail, setDetail] = useState<any>(null)

  const { loading, error, data } = useQuery(GET_ANIMEDETAIL, {
    variables: {
      id: id || 0,
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
