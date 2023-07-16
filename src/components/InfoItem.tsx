import React from 'react'

import { Text } from '@/app/styeled'

const InfoItem = ({
  label,
  value,
  isVertical,
  textAlign,
}: {
  label: string
  value: string
  isVertical?: boolean
  textAlign?: string
}) => (
  <Text textAlign={textAlign}>
    <b>{label}</b>: {isVertical && <br />}
    {value}
  </Text>
)

export default React.memo(InfoItem)
