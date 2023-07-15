'use client'
import { useState } from 'react'
import React from 'react'
import { connect } from 'react-redux'

import CollectionCard from './(components)/CollectionCard'
import ModalDeleteConfirmation from './(components)/ModalDeleteConfirmation'
import { collectStateType, removeCollection } from './CollectionSlice'
import { AppTitle, FlexWrapper, NavBar } from '../styeled'

function CollectionList({
  collections,
  removeCollection,
}: {
  collections: collectStateType[]
  removeCollection: (payload: { collectionName: string }) => void
}) {
  const [isModalFormColOpen, setIsModalFormColOpen] = useState(false)
  const [colNameSelected, setColNameSelected] = useState<string>('')

  const onDelete = (colName: string) => {
    setColNameSelected(colName)
    setIsModalFormColOpen(true)
  }

  const onDeleteConfirm = () => {
    removeCollection({ collectionName: colNameSelected })
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
      {collections.map((col) => (
        <CollectionCard
          key={col.name}
          onEdit={(name) => {
            console.log('onEdit collection: ', name)
          }}
          onDelete={onDelete}
          data={col}
        />
      ))}
      {/* <ModalCreateCollection
        isOpen={isModalFormColOpen}
        closeModal={() => setIsModalFormColOpen(false)}
      /> */}
      <ModalDeleteConfirmation
        onConfirm={onDeleteConfirm}
        isOpen={isModalFormColOpen && !!colNameSelected}
        closeModal={() => setIsModalFormColOpen(false)}
        title={`Yakin ingin menghapus collection "${colNameSelected}"?`}
      />
    </>
  )
}

function mapDispatchToProps(
  dispatch: (arg0: { payload: { collectionName: string }; type: 'collectionList/removeCollection' }) => any
) {
  return {
    removeCollection: (payload: { collectionName: string }) => dispatch(removeCollection(payload)),
  }
}

function mapStateToProps(state: any) {
  return { collections: state.collections }
}
export default React.memo(connect(mapStateToProps, mapDispatchToProps)(CollectionList))
