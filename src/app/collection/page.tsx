'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import BackIcon from '@/assets/icons/BackIcon'

import CollectionCard from './(components)/CollectionCard'
import ModalCreateCollection from './(components)/ModalCreateCollection'
import { collectStateType, removeCollection } from './CollectionSlice'
import { AppTitle, Button, FlexWrapper, NavBar } from '../styeled'
import ModalDeleteConfirmation from '../../components/ModalDeleteConfirmation'

function CollectionList() {
  const [IsModalDeleteConfirm, setIsModalDeleteConfirm] = useState(false)
  const [isModalFormColOpen, setIsModalFormColOpen] = useState(false)
  const [colNameSelected, setColNameSelected] = useState<string>('')
  const dispatch = useDispatch()
  const router = useRouter()
  const collections = useSelector((state: any) => state.collections)

  const onDelete = (colName: string) => {
    setColNameSelected(colName)
    setIsModalDeleteConfirm(true)
  }

  const onDeleteConfirm = () => {
    dispatch(removeCollection({ collectionName: colNameSelected }))
    setIsModalDeleteConfirm(false)
    setColNameSelected('')
  }

  return (
    <>
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
          // onEdit={(name) => {
          //   console.log('onEdit collection: ', name)
          // }}
          onDelete={onDelete}
          data={col}
        />
      ))}
      <ModalDeleteConfirmation
        onConfirm={onDeleteConfirm}
        isOpen={IsModalDeleteConfirm && !!colNameSelected}
        closeModal={() => setIsModalDeleteConfirm(false)}
        title={`Yakin ingin menghapus collection "${colNameSelected}"?`}
      />

      <ModalCreateCollection
        isOpen={isModalFormColOpen}
        closeModal={() => setIsModalFormColOpen(false)}
      />
    </>
  )
}

export default React.memo(CollectionList)
