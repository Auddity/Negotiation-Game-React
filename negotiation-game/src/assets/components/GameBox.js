import React from 'react';
import NegBox from './NegBox';
import { useContext } from 'react';
import GameContext from '../../context/GameContext';
import '../scss/_GameBox.scss';

const GameBox = () => {
  const { newNpc, newGame } = useContext(GameContext)

  console.log(newGame);
  const handleClick = e => {
    
    console.log('clicked', e.target.parentElement.id);
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
    </section>
  )
}

export default GameBox