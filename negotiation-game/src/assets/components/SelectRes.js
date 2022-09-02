import React from 'react';
import '../scss/_SelectRes.scss';

const SelectRes = ({ handleModal }) => {
  return (
    <button
      className='SelectRes'
      onClick={handleModal}
    >
      
        Select<br></br>Resource
      
    </button>
  )
}

export default SelectRes;