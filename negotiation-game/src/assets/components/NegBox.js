import React from 'react';
import PaidPortCtnr from './PaidPortCtnr';
import SelectRes from './SelectRes';
import '../scss/_NegBox.scss';

const NegBox = ({ item, id, handleClick }) => {
  
  return (
    <div 
      className='NegBox'
      id={id}
    >
      <PaidPortCtnr 
        picture={item.picture.large}
      />
      <SelectRes 
        handleClick={handleClick}
      />
    </div>
  )
}

export default NegBox;