import { createContext, useState, useReducer, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import npc from '../api/npc'

const GameContext = createContext({});

export const ACTIONS = {
  SELECTED: 'selected',
  TURNS: 'turns',
  NEG_GOODS: 'neg-goods'
}

const reducer = (newGame, { type, payload }) => {
  const diff = newGame.difficulty;
  
  switch(type) {
    case ACTIONS.SELECTED:
      return { ...newGame, difficulty: payload }
     case ACTIONS.TURNS:
      if(diff === 'easy') {
        return { ...newGame, turns: 3 }
      }
      if(diff === 'moderate') {
        return { ...newGame, turns: 3 }
      }
      if(diff === 'difficult') {
        return { ...newGame, turns: 4 }
      }
      return
    case ACTIONS.NEG_GOODS:
      if(diff === 'easy') {
        difficultyRandomValues(3, 4)
        console.log(3, 4)
      }
      if(diff === 'moderate') {
        difficultyRandomValues(5, 6)
        console.log(5, 6)
      }
      if(diff === 'difficult') {
        difficultyRandomValues(7, 10)
        console.log(7, 10)

      }
      return
      
    default:
  }
}

const difficultyRandomValues = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const GameProvider = ({ children }) => {
  const [newGame, dispatch] = useReducer(reducer, {
    difficulty: 'easy'
  });
  const [newNpc, setNewNpc] = useState([])
  const navigate = useNavigate()

  const startGame = () => {
    dispatch({ type: ACTIONS.TURNS })
    dispatch({ type: ACTIONS.NEG_GOODS })
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