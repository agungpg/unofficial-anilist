import { client } from '@/configs/ApolloClientProvider';
import { GET_ANIMELIST } from '@/queries';
import React from 'react'

// const getAllAnimeList = async (page: number) => {
//   const { data, loading, error } = await client.query({
//     query: GET_ANIMELIST,
//     variables: {
//       page: page,
//       perPage: 10,
//       isAdult: false
//     },
//   });

//   return data
// }

// export async function generateStaticParams() {
//     const data = await Promise.all(Array.from({length: 50}, (x, i) => i).map(idx => getAllAnimeList(idx+1)))
    
//     const paramsList =data?.reduce((result, item) => {
//       const arr = item.result.list.map((anime: any) => ({id: anime.id}))
//       result = [...result, ...arr]
//       return result
//     }, [])
//     console.log("paramsList: ", paramsList)
//   return paramsList
// }

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex min-h-screen bg-[#1A1A1A] flex-col items-center justify-between lg:py-10 md:py-10'>
      <div className='container relative'>{children}</div>
    </main>
  )
}
