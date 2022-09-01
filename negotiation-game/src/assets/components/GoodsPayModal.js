import React from 'react'
import '../scss/_GoodsPayModal.scss'

const GoodsPayModal = ({ gameGoods }) => {
  return (
    
    <div className="goodsPayModalCtnr">
      {gameGoods.map(good => {
        return <button key={good.id} className="good">
          <img className="goodImage" src={good.image} alt={good.name} />
          <div className="goodDetails">
            <span className='name'>{good.name}</span>
            <span className="quantity">{good.quantity}/250</span>
          </div>
        </button>
      })}
    </div>
  )
}

export default GoodsPayModal