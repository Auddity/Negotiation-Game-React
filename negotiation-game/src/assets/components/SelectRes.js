import React from 'react';
import '../scss/_SelectRes.scss';

const SelectRes = ({ handleClick }) => {
  // console.log(index);
  return (
    <button
      className='SelectRes'
      onClick={handleClick}
    >
      
        Select<br></br>Resource
      
    </button>
  )
}

export default SelectRes;