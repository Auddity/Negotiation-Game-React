import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header';

const Layout = ({ headerGoods, newGame, dispatch }) => {
  return (
    <div>
      <Header
        newGame={newGame}
        dispatch={dispatch}
      />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default Layout