import React from 'react';
import NegBox from './NegBox';
import '../scss/_GameBox.scss';

const GameBox = ({newGame}) => {
  const negKeys = [1, 2, 3, 4, 5]
  
  return (
    <section
      className='GameBoxCtnr'
    >
      <div className="gameBox">
        {negKeys.map(item => {
          return <NegBox 
            id={item}
            // newGame={newGame}
          />
        })}
      </div>
    </section>
  )
}

export default GameBox