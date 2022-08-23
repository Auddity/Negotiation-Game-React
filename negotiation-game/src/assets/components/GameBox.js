import React from 'react';
import NegBox from './NegBox';
import { useContext } from 'react';
import GameContext from '../../context/GameContext';
import '../scss/_GameBox.scss';

const GameBox = () => {
  const { newNpc } = useContext(GameContext)
  
  return (
    <section
      className='GameBoxCtnr'
    >
      <div className="gameBox">
        {newNpc.map((item, index) => {
          return <NegBox 
            key={index}
            item={item}
          />
        })}
      </div>
    </section>
  )
}

export default GameBox