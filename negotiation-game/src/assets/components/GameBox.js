import React from 'react';
import NegBox from './NegBox';
import GoodsPayModal from './GoodsPayModal';
import { useContext, useState } from 'react';
import GameContext from '../../context/GameContext';
import '../scss/_GameBox.scss';

const GameBox = () => {
  const { gameNpcs, gameGoods } = useContext(GameContext)
  const [ modal, setModal ] = useState(false)

  const handleModal = e => {
    console.log(e.target);
    setModal(prev => prev = !prev)
  }

  const handleAssignment = e => {
    console.log(e.currentTarget);
  }
  
  return (
    <section
      className={modal ? 'GameBoxCtnr modalActive' : 'GameBoxCtnr'}
    >
      <div className="gameBox">
        {gameNpcs.map((item, index) => {
          return <NegBox 
            key={index}
            id={index}
            item={item}
            handleModal={handleModal}
          />
        })}
      </div>

      {/* Select Good to Pay Modal */}
      {modal &&
        <GoodsPayModal 
          gameGoods={gameGoods} 
          handleAssignment={handleAssignment}
        />
      }
      
    </section>
  )
}

export default GameBox