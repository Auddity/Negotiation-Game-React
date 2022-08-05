import React from 'react';
import GoodsBox from './GoodsBox';
import '../scss/_header.scss';

const Header = ({ goodsData }) => {
  
  return (
    <header className='App-header'>
      {
        goodsData.good.map(item => {
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