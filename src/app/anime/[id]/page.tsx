'use client'
import { GET_ANIMEDETAIL } from "@/queries"
import { mapAnimeDetailData, mapAnimeListItemData } from "@/utils/anime"
import { useQuery } from "@apollo/client"
import { useParams } from "next/navigation"
import React, { useEffect, useState } from "react"

export default function DETAIL() {
  const params = useParams()
  console.log("router: ", params)
  const [detail, setDetail] = useState<any>(null)
  const { loading, error, data } = useQuery(GET_ANIMEDETAIL, {
    variables: {
      id: params?.id || 0,
      isAdult: false
    }
  });

  useEffect(() => {
    if(data) {
      console.log("data detail: ", data)
      const dataTransform = mapAnimeDetailData(data.Media)
      setDetail(dataTransform)
    }
  }, [data])

  console.log("data: ", detail)
  return (
    <h1>DETAIL</h1>
  )
}

