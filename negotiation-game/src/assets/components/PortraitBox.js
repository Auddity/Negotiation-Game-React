import React from 'react'
import { useContext } from 'react'
import GameContext from '../../context/GameContext'

const PortraitBox = () => {
  const { newNpc } = useContext(GameContext)

  return (
    <div>
      <img src={newNpc} alt="" />
    </div>
  )
}

export default PortraitBox