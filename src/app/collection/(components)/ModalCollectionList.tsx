import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'

import { FlexWrapper } from '@/app/styeled'
import { AnimeListItemTypes } from '@/types/animeList'

import CollectionCardOption from './CollectionCardOption'
import { addToCollection, collectStateType } from '../CollectionSlice'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
}

function ModalCollectionList({
  isOpen,
  closeModal,
  data,
  collections,
  addToCollection,
  collectionsNameSelected,
}: {
  collections: collectStateType[]
  isOpen: boolean
  data: any
  closeModal: () => void
  addToCollection: (payload: any) => void
  collectionsNameSelected?: string[]
}) {
  const [collectionSelected, setCollectionSelected] = useState<string[]>([])

  const onCollectionSelected = (colName: string) => {
    const isSelected = isCollectionSelected(colName)
    if (!isSelected) setCollectionSelected((prevState) => [...prevState, colName])
    else setCollectionSelected((prevState) => prevState.filter((col) => col != colName))
  }

  const isCollectionSelected = (colName: string) => {
    const isSelected = collectionSelected.findIndex((colSelected) => colName == colSelected)
    if (isSelected > -1) return true
    return false
  }

  const findCollectionByName = (colNames: string[]) => {
    return collections.filter((col: collectStateType) => colNames.includes(col.name))
  }

  const onSave = () => {
    const payload = {
      collectionList: collectionSelected,
      animeList: [data],
    }

    addToCollection(payload)
    const collectSuccess = isSaveSuccess()
    if (collectSuccess) closeModal()
  }

  const isSaveSuccess = () => {
    const collMatches = findCollectionByName(collectionSelected)

    for (const col of collMatches) {
      let isAnimeExist = true
      for (const anime of col.animeList) {
        isAnimeExist = anime.id == data.id
        if (isAnimeExist) break
      }
      if (!isAnimeExist) return false
    }

    return true
  }

  useEffect(() => {
    if (collectionsNameSelected) setCollectionSelected(collectionsNameSelected)
  }, [collectionsNameSelected])

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      style={customStyles}
      contentLabel='Example Modal'
    >
      <FlexWrapper
        direction='column'
        gap='16px'
      >
        <FlexWrapper
          justifyContent='space-between'
          alignItems='center'
          wrap='wrap'
        >
          <h3>List Collection</h3>
          <button onClick={closeModal}>X</button>
        </FlexWrapper>
        <FlexWrapper
          justifyContent='space-between'
          alignItems='left'
          direction='column'
          gap='8px'
        >
          {collections.map((col: any) => {
            const isSelected = isCollectionSelected(col.name)
            return (
              <CollectionCardOption
                data={col}
                key={col.name}
                selected={isSelected}
                onSelect={onCollectionSelected}
              />
            )
          })}
        </FlexWrapper>
        <FlexWrapper direction='row'>
          <button>Add New</button>
          <button onClick={onSave}>SAVE</button>
        </FlexWrapper>
      </FlexWrapper>
    </Modal>
  )
}

function mapDispatchToProps(dispatch: (arg0: { payload: any; type: 'collectionList/addToCollection' }) => any) {
  return {
    addToCollection: (payload: { collectionList: string[]; animeList: AnimeListItemTypes[] }) =>
      dispatch(addToCollection(payload)),
  }
}

function mapStateToProps(state: any) {
  return { collections: state.collections }
}
export default React.memo(connect(mapStateToProps, mapDispatchToProps)(ModalCollectionList))
