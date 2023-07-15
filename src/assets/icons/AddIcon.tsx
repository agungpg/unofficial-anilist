import React, { FC } from 'react'

interface AddIcon {
  width?: number
  height?: number
  fill?: string
  className?: string
}

const AddIcon: FC<AddIcon> = ({ width, height, fill, className }) => {
  return (
    <svg
      width={width || 14}
      height={height || 14}
      fill='none'
      viewBox='0 0 14 14'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.16602 12.3327V7.33268H0.166016V5.66602H5.16602V0.666016H6.83268V5.66602H11.8327V7.33268H6.83268V12.3327H5.16602Z'
        fill={fill || '#38499A'}
      />
    </svg>
  )
}

export default AddIcon
