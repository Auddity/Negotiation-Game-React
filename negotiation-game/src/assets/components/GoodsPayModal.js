import React from 'react'
import '../scss/_GoodsPayModal.scss'

const GoodsPayModal = ({ gameGoods, handleUserGoodChoice }) => {
// TODO: Create custom hook for window size and use it to position modal

  return (
    <div className="goodsPayModalCtnr">
      {gameGoods.map(good => {
        return <button 
            className="good"
            key={good.id} 
            data-good-id={good.id}
            onClick={handleUserGoodChoice}
          >
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