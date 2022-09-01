import React from 'react';
import NegBox from './NegBox';
import GoodsPayModal from './GoodsPayModal';
import { useContext } from 'react';
import GameContext from '../../context/GameContext';
import '../scss/_GameBox.scss';

const GameBox = () => {
  const { newNpc, newGame } = useContext(GameContext)
  const { gameGoods } = newGame

  const handleClick = e => {
    
  }
  
  return (
    <section
      className='GameBoxCtnr'
    >
      <div className="gameBox">
        {newNpc.map((item, index) => {
          return <NegBox 
            key={index}
            id={index}
            item={item}
            handleClick={handleClick}
          />
        })}
      </div>

      {/* Select Good to Pay Modal */}
       <GoodsPayModal gameGoods={gameGoods} />
      
    </section>
  )
}

export default GameBox