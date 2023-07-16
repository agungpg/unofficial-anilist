import React from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'

import { FlexWrapper, Text } from '@/app/styeled'
import WarnigIcon from '@/assets/icons/WarningIcon'

import { collectStateType, createCollection } from '../app/collection/CollectionSlice'

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

function ModalCreateCollection({
  isOpen,
  closeModal,
  onConfirm,
  title,
}: {
  isOpen: boolean
  closeModal: () => void
  onConfirm: () => void
  title?: string
}) {
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
        width='300px'
      >
        <FlexWrapper
          justifyContent='center'
          alignItems='center'
        >
          <WarnigIcon
            width={100}
            height={100}
          />
        </FlexWrapper>
        {title && (
          <Text
            color='#000'
            fontWeight='500'
            fontSize='18px'
          >
            {title}
          </Text>
        )}
        <FlexWrapper
          justifyContent='space-between'
          alignItems='left'
          direction='column'
          gap='4px'
        />
        <FlexWrapper direction='row'>
          <button onClick={closeModal}>
            {' '}
            <Text
              color='#000'
              fontWeight='500'
              fontSize='18px'
            >
              CANCEL
            </Text>
          </button>
          <button onClick={onConfirm}>
            {' '}
            <Text
              color='#ED4337'
              fontWeight='500'
              fontSize='18px'
            >
              YES
            </Text>
          </button>
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
