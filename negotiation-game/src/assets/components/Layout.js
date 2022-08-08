import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header';

const Layout = ({ headerGoods }) => {
  return (
    <div>
      <Header
        headerGoods={headerGoods}
      />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default Layout