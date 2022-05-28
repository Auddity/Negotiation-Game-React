import React from 'react';
import PaidPortCtnr from './PaidPortCtnr';
import SelectRes from './SelectRes';
import '../scss/_NegBox.scss';

const NegBox = () => {
  return (
    <div 
      className='NegBox'
    >
      <PaidPortCtnr />
      <SelectRes />
    </div>
  )
}

export default NegBox;