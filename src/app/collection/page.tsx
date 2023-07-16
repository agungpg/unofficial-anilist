'use client'
import { useState } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CollectionCard from './(components)/CollectionCard'
import { collectStateType, removeCollection } from './CollectionSlice'
import { AppTitle, FlexWrapper, NavBar } from '../styeled'
import ModalDeleteConfirmation from '../../components/ModalDeleteConfirmation'

function CollectionList() {
  // {
  //   collections,
  //   removeCollection,
  // }: {
  //   collections: collectStateType[]
  //   removeCollection: (payload: { collectionName: string }) => void
  // }
  const [isModalFormColOpen, setIsModalFormColOpen] = useState(false)
  const [colNameSelected, setColNameSelected] = useState<string>('')
  const dispatch = useDispatch()
  const collections = useSelector((state: any) => state.collections)

  const onDelete = (colName: string) => {
    setColNameSelected(colName)
    setIsModalFormColOpen(true)
  }

  const onDeleteConfirm = () => {
    dispatch(removeCollection({ collectionName: colNameSelected }))
    setIsModalFormColOpen(false)
    setColNameSelected('')
  }

  return (
    <>
      <NavBar>
        <FlexWrapper>
          <AppTitle>COLLECTION LIST</AppTitle>
          <button
            onClick={() => setIsModalFormColOpen(true)}
            style={{ color: '#fff' }}
          >
            Add New
          </button>
        </FlexWrapper>
      </NavBar>
      {collections.map((col: collectStateType) => (
        <CollectionCard
          key={col.name}
          onEdit={(name) => {
            console.log('onEdit collection: ', name)
          }}
          onDelete={onDelete}
          data={col}
        />
      ))}
      <ModalDeleteConfirmation
        onConfirm={onDeleteConfirm}
        isOpen={isModalFormColOpen && !!colNameSelected}
        closeModal={() => setIsModalFormColOpen(false)}
        title={`Yakin ingin menghapus collection "${colNameSelected}"?`}
      />
    </>
  )
}

export default React.memo(CollectionList)
// function mapDispatchToProps(
//   dispatch: any
// ) {
//   return {
//     removeCollection: (payload: { collectionName: string }) => dispatch(removeCollection(payload)),
//   }
// }

// function mapStateToProps(state: any) {
//   return { collections: state.collections }
// }
// export default React.memo(connect(mapStateToProps, mapDispatchToProps)(CollectionList))
