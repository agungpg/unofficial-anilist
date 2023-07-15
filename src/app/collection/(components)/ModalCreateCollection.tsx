import styled from '@emotion/styled'
import React, { useState } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'

import { FlexWrapper, Text } from '@/app/styeled'
import { validateNoSpecialChar } from '@/utils/common'

import { collectStateType, createCollection } from '../CollectionSlice'

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

const CollectionTextInput = styled.input`
  width: 100%;
  min-width: 300px;
  height: 40px;
  border: #ddd 1px solid;
  border-radius: 4px;
  padding: 8px;
`

function ModalCreateCollection({
  isOpen,
  closeModal,
  collections,
  createCollection,
}: {
  isOpen: boolean
  closeModal: () => void
  collections: collectStateType[]
  createCollection: (payload: { collection: collectStateType }) => void
}) {
  const [collectionSelected, setCollectionSelected] = useState<string[]>([])

  const [name, setName] = useState<string>('')
  const [error, setError] = useState<string>('')

  const onSave = () => {
    const isValid = validation()
    if (!isValid) return

    createCollection({
      collection: {
        name,
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString(),
        animeList: [],
      },
    })
    closeModal()
  }

  const validation = () => {
    setError('')
    if (!name) {
      setError('Name is required.')
      return false
    }
    const noSpecialChar = validateNoSpecialChar(name)
    if (!noSpecialChar) {
      setError('Name can not contains special characters.')
      return false
    }
    const collectionNameIndex = collections.findIndex((collection: collectStateType) => collection.name == name)
    if (collectionNameIndex > -1) {
      setError('Collection name is already exist')
      return false
    }

    return true
  }

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
          <h3>Add New Collection</h3>
          <button onClick={closeModal}>X</button>
        </FlexWrapper>
        <FlexWrapper
          justifyContent='space-between'
          alignItems='left'
          direction='column'
          gap='4px'
        >
          <CollectionTextInput
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error && (
            <Text
              fontSize='14px'
              color='#ED4337'
            >
              {error}
            </Text>
          )}
        </FlexWrapper>
        <FlexWrapper direction='row-reverse'>
          <button onClick={onSave}>SAVE</button>
        </FlexWrapper>
      </FlexWrapper>
    </Modal>
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
export default React.memo(connect(mapStateToProps, mapDispatchToProps)(ModalCreateCollection))
