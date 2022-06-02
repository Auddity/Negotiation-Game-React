import React from 'react';
import PaidBox from './PaidBox';
import PortraitBox from './PortraitBox';
import '../scss/_PaidPortCtnr.scss';

const PaidPortCtnr = ({newGame}) => {
  return (
    <div
      className='PaidPortCtnr'
    >
      <PaidBox />
      <PortraitBox 
        // newGame={newGame}
      />
    </div>
  )
}

export default PaidPortCtnr