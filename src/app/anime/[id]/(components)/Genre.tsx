import React from 'react'

const Genre = ({ name }: { name: string }) => <div className='genre'>{name}</div>

export default React.memo(Genre)
