import React from 'react'

const GoodsBox = ({id, name, quantity, image}) => {

  return (
    <div 
      className='GoodsBox'
      id={id}
      key={id}  
    >
      <img src={image} alt={name} />
      <p className='quantity'>250 / {quantity}</p>
    </div>
  )
}

export default GoodsBox;