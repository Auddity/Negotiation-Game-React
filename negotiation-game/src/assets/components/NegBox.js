import React from 'react';
import PaidPortCtnr from './PaidPortCtnr';
import SelectRes from './SelectRes';
import '../scss/_NegBox.scss';

const NegBox = ({ id }) => {

  return (
    <div 
      key={id.toString()}
      className='NegBox'
    >{id}
      <PaidPortCtnr />
      <SelectRes />
    </div>
  )
}

export default NegBox;