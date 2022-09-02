import React from 'react';
import PaidPortCtnr from './PaidPortCtnr';
import SelectRes from './SelectRes';
import '../scss/_NegBox.scss';

const NegBox = ({ item, id, handleModal }) => {
  
  return (
    <div 
      className='NegBox'
      id={id}
    >
      <PaidPortCtnr 
        picture={item.picture.large}
      />
      <SelectRes 
        handleModal={handleModal}
      />
    </div>
  )
}

export default NegBox;