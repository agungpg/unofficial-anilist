'use client'
import Head from 'next/head'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import BackIcon from '@/assets/icons/BackIcon'

import CollectionCard from './(components)/CollectionCard'
import ModalFormCollection from './(components)/ModalFormCollection'
import CollectionDetail from './[id]/page'
import { collectStateType, removeCollection } from './CollectionSlice'
import { AppTitle, Button, FlexWrapper, NavBar } from '../styeled'
import ModalDeleteConfirmation from '../../components/ModalDeleteConfirmation'

function CollectionList() {
  const searchParams = useSearchParams()
  const name = searchParams?.get('name')

  const [IsModalDeleteConfirm, setIsModalDeleteConfirm] = useState(false)
  const [isModalFormColOpen, setIsModalFormColOpen] = useState(false)
  const [colNameSelected, setColNameSelected] = useState<string>('')
  const dispatch = useDispatch()
  const router = useRouter()
  const collections = useSelector((state: any) => state.collections)
  if (name) return <CollectionDetail />

  const onDelete = (colName: string) => {
    setColNameSelected(colName)
    setIsModalDeleteConfirm(true)
  }

  const onDeleteConfirm = () => {
    dispatch(removeCollection({ collectionName: colNameSelected }))
    setIsModalDeleteConfirm(false)
    setColNameSelected('')
  }
  const onEdit = (name: string) => {
    setColNameSelected(name)
    setIsModalFormColOpen(true)
  }

  const onModalFormClose = () => {
    setIsModalFormColOpen(false)
    setColNameSelected('')
  }

  return (
    <>
      <Head>
        <title>COLLECTION LIST</title>
      </Head>
      <NavBar>
        <FlexWrapper>
          <FlexWrapper
            width='80%'
            justifyContent='flex-start'
          >
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
            <AppTitle>COLLECTION LIST</AppTitle>
          </FlexWrapper>
          <Button onClick={() => setIsModalFormColOpen(true)}>Add New</Button>
        </FlexWrapper>
      </NavBar>
      {collections.map((col: collectStateType) => (
        <CollectionCard
          key={col.name}
          onEdit={onEdit}
          onDelete={onDelete}
          data={col}
        />
      ))}
      <ModalDeleteConfirmation
        onConfirm={onDeleteConfirm}
        isOpen={IsModalDeleteConfirm && !!colNameSelected}
        closeModal={() => setIsModalDeleteConfirm(false)}
        title={`Are you sure want to delete "${colNameSelected}"?`}
      />

      <ModalFormCollection
        collectionName={colNameSelected}
        isOpen={isModalFormColOpen}
        closeModal={onModalFormClose}
      />
    </>
  )
}

export default React.memo(CollectionList)
