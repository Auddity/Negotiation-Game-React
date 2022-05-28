import React from 'react';
import NegBox from './NegBox';
import '../scss/_GameBox.scss';

const GameBox = () => {
  return (
    <section
      className='GameBoxCtnr'
    >
      <div className="gameBox">

        GameBox
        <NegBox />
        <NegBox />
        <NegBox />
        <NegBox />
        <NegBox />
      </div>
    </section>
  )
}

export default GameBox