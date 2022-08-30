import { createContext, useState, useReducer, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import npc from '../api/npc'

const GameContext = createContext({});

export const ACTIONS = {
  SELECTED: 'selected',
  TURNS: 'turns'
}

const reducer = (newGame, { type, payload }) => {
  switch(type) {
    case ACTIONS.SELECTED:
      return { ...newGame, difficulty: payload }
     case ACTIONS.TURNS:
      if(newGame.difficulty === 'easy') {
        return { ...newGame, turns: 3 }
      }
      if(newGame.difficulty === 'medium') {
        return { ...newGame, turns: 3 }
      }
      if(newGame.difficulty === 'hard') {
        return { ...newGame, turns: 4 }
      }
      return
      
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
    dispatch({ type: ACTIONS.TURNS })
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

  // console.log(newGame)

  return (
    <GameContext.Provider value={{
      newGame, dispatch, startGame, newNpc
    }} >
      {children}
    </GameContext.Provider>
  )
}

export default GameContext