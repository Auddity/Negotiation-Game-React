import React from 'react';
import GoodsBox from './GoodsBox';
import '../scss/_header.scss';

const Header = ({ headerGoods }) => {
  
  return (
    <header className='App-header'>
      {
        headerGoods.map(item => {
          return <GoodsBox
            key={item.id}
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