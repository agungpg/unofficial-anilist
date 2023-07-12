'use client'
import AnimeCard from '../components/AnimeCard/AnimeCard'
import styled from '@emotion/styled'
import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import composeAnimeListData from '@/utils/composeAnimeListData';
import { AnimeListItemTypes, PageInfoType } from '@/types/AnimeList';
import AnimeList from '@/components/AnimeList/AnimeList';
import Pagination from '@/components/Pagination/Pagination';

const NavBar = styled.div`
  diplay: flex;
  align-items: center;
  justify-content: center;
  widht: 100%;
  background: #0D70DF;
`

const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: #FFF;
`
export default function Home() {
  const [pageInfo, setPageInfo] = useState<PageInfoType>({
    total: 0,
    currentPage: 1,
    lastPage: 1,
    hasNextPage: false,
    perPage: 10,
    isSetFromBE: false,
  })

  return (
    <main className="flex min-h-screen bg-[#1A1A1A] flex-col items-center justify-between">
      <div className='container'>
      <NavBar>
        <Title>UNOFFICIAL ANILIST</Title>
      </NavBar>
      <AnimeList pageInfo={pageInfo} setPageInfo={setPageInfo} />
      {pageInfo.total > 1 && <Pagination 
        totalPage={pageInfo.total} 
        currentPage={pageInfo.currentPage} 
        onPageChange={(page: number) => setPageInfo(prevPageInfo => ({
          ...prevPageInfo,
          currentPage: page
        }))} />
        }
      </div>
    </main>
  )
}
