import React from 'react';
import GoodsBox from './GoodsBox';
import '../scss/_header.scss';

const Header = ({ data }) => {
  
  return (
    <header className='App-header'>
      {
        data.good.map(item => {
          return <GoodsBox
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            image={item.image}
          />
        })
      }
    </header>
  )
}

export default Header;