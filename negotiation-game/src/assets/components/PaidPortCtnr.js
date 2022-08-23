import React from 'react';
import PaidBox from './PaidBox';
import PortraitBox from './PortraitBox';
import '../scss/_PaidPortCtnr.scss';

const PaidPortCtnr = ({ picture }) => {
  return (
    <div
      className='PaidPortCtnr'
    >
      <PaidBox />
      <PortraitBox 
        picture={picture}
      />
    </div>
  )
}

export default PaidPortCtnr