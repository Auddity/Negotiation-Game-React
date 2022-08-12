import { createContext, useState, useReducer } from "react";
import { useNavigate } from 'react-router-dom'

const GameContext = createContext({});

export const ACTIONS = {
  SELECTED: 'selected'
}

const reducer = (newGame, { type, payload }) => {
  switch(type) {
    case ACTIONS.SELECTED:
      return { ...newGame, difficulty: payload }
     
      
    default:
  }
}

export const GameProvider = ({ children }) => {
  const [newGame, dispatch] = useReducer(reducer, {
    difficulty: 'easy'
  });
  const [newNpc, setNewNpc] = useState({})
  const navigate = useNavigate()

  const startGame = () => {
    // Code that loads game assets.

    navigate('game')    
  }

  console.log(newGame);

  return (
    <GameContext.Provider value={{
      newGame, dispatch, startGame
    }} >
      {children}
    </GameContext.Provider>
  )
}

export default GameContext