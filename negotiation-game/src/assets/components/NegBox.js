import React from 'react';
import PaidPortCtnr from './PaidPortCtnr';
import SelectRes from './SelectRes';
import '../scss/_NegBox.scss';

const NegBox = ({ item }) => {
  return (
    <div 
      className='NegBox'
    >
      <PaidPortCtnr 
        picture={item.picture.large}
      />
      <SelectRes />
    </div>
  )
}

export default NegBox;