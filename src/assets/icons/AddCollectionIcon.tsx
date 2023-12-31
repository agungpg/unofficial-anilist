import React from 'react'

const AddCollectionIcon = ({ width, height, color }: { width?: string; height?: string; color?: string }) => (
  <svg
    fill={color || '#000000'}
    width={width || '64px'}
    height={height || '64px'}
    viewBox='-4.74 0 29.588 29.588'
    id='_17_-_Add_Bookmark'
  >
    <path
      id='Path_196'
      data-name='Path 196'
      d='M26.059,4a3,3,0,0,0-3-3H8.941a3,3,0,0,0-3,3V27.588a3,3,0,0,0,4.628,2.52L16,26.6l5.431,3.509a3,3,0,0,0,4.628-2.52Zm-2,0V27.588a1,1,0,0,1-1.543.84l-5.973-3.859a1,1,0,0,0-1.086,0L9.484,28.428a1,1,0,0,1-1.543-.84V4a1,1,0,0,1,1-1H23.059a1,1,0,0,1,1,1Z'
      transform='translate(-5.941 -1)'
    />
    <path
      id='Path_197'
      data-name='Path 197'
      d='M14.6,6.578v5.4a1,1,0,1,0,2,0V6.578a1,1,0,0,0-2,0Z'
      transform='translate(-5.941 -1)'
    />
    <path
      id='Path_198'
      data-name='Path 198'
      d='M18.3,8.28H12.9a1,1,0,0,0,0,2H18.3a1,1,0,0,0,0-2Z'
      transform='translate(-5.941 -1)'
    />
  </svg>
)

export default React.memo(AddCollectionIcon)
