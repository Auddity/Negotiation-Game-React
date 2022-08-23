import React from 'react';
import PaidPortCtnr from './PaidPortCtnr';
import SelectRes from './SelectRes';
import '../scss/_NegBox.scss';

const NegBox = ({ item }) => {
  console.log(item);
  return (
    <div 
      className='NegBox'
    >
      <PaidPortCtnr 
        picture={item.picture.medium}
      />
      <SelectRes />
    </div>
  )
}

export default NegBox;