import { createContext, useState, useReducer, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import npc from '../api/npc'

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
  const [newNpc, setNewNpc] = useState([])
  const navigate = useNavigate()

  const startGame = () => {
    navigate('game')    
  }

  useEffect(() => {
    const fetchNpc = async () => {
      try {
        const response = await npc.get('/api');
        setNewNpc(response.data.results)
      } catch(err) {
        if(err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      } 
    }

    fetchNpc()
  }, [newGame])

  // console.log(newNpc)

  return (
    <GameContext.Provider value={{
      newGame, dispatch, startGame, newNpc
    }} >
      {children}
    </GameContext.Provider>
  )
}

export default GameContext