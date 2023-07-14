'use client'
import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

import AnimeList from '@/components/AnimeList/AnimeList'
import Pagination from '@/components/Pagination/Pagination'
import { GET_ANIMELIST } from '@/queries'
import { mapAnimeListItemData } from '@/utils/anime'

import CollectionCard from './collection/(components)/CollectionCard'
import { AppTitle, NavBar } from './styeled'
import { AnimeListDataItemResponseType, AnimeListItemTypes, PageInfoType } from '../types/animeList'

export default function Home() {
  const [pageInfo, setPageInfo] = useState<PageInfoType>({
    total: 0,
    currentPage: 1,
    lastPage: 1,
    hasNextPage: false,
    perPage: 10,
    isSetFromBE: false,
  })

  const [list, setList] = useState<AnimeListItemTypes[]>([])

  const { loading, data } = useQuery(GET_ANIMELIST, {
    variables: {
      page: pageInfo.currentPage,
      perPage: pageInfo.perPage,
      isAdult: false,
    },
  })

  useEffect(() => {
    if (data) {
      setList(data.result.list.map((item: AnimeListDataItemResponseType) => mapAnimeListItemData(item)))
      if (!pageInfo.isSetFromBE) setPageInfo({ ...data.result.pageInfo, isSetFromBE: true } as PageInfoType)
    }
  }, [data])

  return (
    <main className='flex min-h-screen bg-[#1A1A1A] flex-col items-center justify-between  lg:py-10 md:py-10'>
      <div className='container'>
        <NavBar>
          <AppTitle>UNOFFICIAL ANILIST</AppTitle>
        </NavBar>
        <CollectionCard />
        <AnimeList
          data={list}
          isLoading={loading}
        />
        {pageInfo.total > 1 && (
          <Pagination
            totalPage={pageInfo.total}
            currentPage={pageInfo.currentPage}
            onPageChange={(page: number) =>
              setPageInfo((prevPageInfo) => ({
                ...prevPageInfo,
                currentPage: page,
              }))
            }
          />
        )}
      </div>
    </main>
  )
}
