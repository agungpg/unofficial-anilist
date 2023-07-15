'use client'
import { useState } from 'react'
import React from 'react'
import { connect } from 'react-redux'

import CollectionCard from './(components)/CollectionCard'
import ModalCreateCollection from './(components)/ModalCreateCollection'
import { collectStateType, createCollection } from './CollectionSlice'
import { AppTitle, FlexWrapper, NavBar } from '../styeled'

function CollectionList({ collections }: { collections: collectStateType[] }) {
  const [isModalFormColOpen, setIsModalFormColOpen] = useState(false)

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
          onDelete={(name) => {
            console.log('delete collection: ', name)
          }}
          data={col}
        />
      ))}
      <ModalCreateCollection
        isOpen={isModalFormColOpen}
        closeModal={() => setIsModalFormColOpen(false)}
      />
    </>
  )
}

function mapDispatchToProps(
  dispatch: (arg0: { payload: { collection: collectStateType }; type: 'collectionList/createCollection' }) => any
) {
  return {
    createCollection: (payload: { collection: collectStateType }) => dispatch(createCollection(payload)),
  }
}

function mapStateToProps(state: any) {
  return { collections: state.collections }
}
export default React.memo(connect(mapStateToProps, mapDispatchToProps)(CollectionList))
