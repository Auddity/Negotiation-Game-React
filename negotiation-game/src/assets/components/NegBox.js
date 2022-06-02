import React from 'react';
import PaidPortCtnr from './PaidPortCtnr';
import SelectRes from './SelectRes';
import '../scss/_NegBox.scss';

const NegBox = ({id, newGame}) => {
  return (
    <div 
      key={id.toString()}
      className='NegBox'
    >{id}
      <PaidPortCtnr
        // newGame={newGame}
      />
      <SelectRes />
    </div>
  )
}

export default NegBox;