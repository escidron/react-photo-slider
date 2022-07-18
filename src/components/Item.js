import React from 'react'

const Item = ({ item }) => {
  return (
    <div className='card'>
      <img src={item.img} alt='' />
    </div>
  )
}

export default Item