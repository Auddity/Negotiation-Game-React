import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header';

const Layout = ({ goodsData }) => {
  return (
    <div>
      <Header
        goodsData={goodsData}
      />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default Layout