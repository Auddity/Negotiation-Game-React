import React from 'react';
import PaidBox from './PaidBox';
import PortraitBox from './PortraitBox';
import '../scss/_PaidPortCtnr.scss';

const PaidPortCtnr = () => {
  return (
    <div
      className='PaidPortCtnr'
    >
      <PaidBox />
      <PortraitBox />
    </div>
  )
}

export default PaidPortCtnr