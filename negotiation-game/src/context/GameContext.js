import { createContext, useState, useReducer, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import npc from '../api/npc'
import goods from '../api/goods'

const GameContext = createContext({});

export const ACTIONS = {
  SELECTED: 'selected',
  TURNS: 'turns',
  NEG_GOODS: 'neg-goods'
}

const reducer = (newGame, { type, payload }) => {
  // const diff = newGame.difficulty;
  
  switch(type) {
    case ACTIONS.SELECTED:
      return { ...newGame, difficulty: payload }
    case ACTIONS.TURNS:
      if(newGame.difficulty === 'easy') {
        return { ...newGame, turns: 3 }
      }
      if(newGame.difficulty === 'moderate') {
        return { ...newGame, turns: 3 }
      }
      if(newGame.difficulty === 'difficult') {
        return { ...newGame, turns: 4 }
      }
      return
    case ACTIONS.NEG_GOODS:
      if(newGame.difficulty === 'easy') {
        return { ...newGame, gameGoods: getRandomNumOfGoods(payload, difficultyRandomValues(2, 4)) }
      }
      if(newGame.difficulty === 'moderate') {
        return { ...newGame, gameGoods: getRandomNumOfGoods(payload, difficultyRandomValues(5, 6))}
      }
      if(newGame.difficulty === 'difficult') {
        return { ...newGame, gameGoods: getRandomNumOfGoods(payload, difficultyRandomValues(7, 10))}
      }
      return
      
    default:
  }
}

const difficultyRandomValues = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Found this algorithm for getting random items from an array on stackoverflow
// https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
const getRandomNumOfGoods = (arr, n) => {
  let result = new Array(n),
      len = arr.length, 
      taken = new Array(len);
  while(n--) {
    var x = Math.floor(Math.random() * len)
    result[n] = arr[x in taken ? taken[x] : x]
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result
}

export const GameProvider = ({ children }) => {
  const [newGame, dispatch] = useReducer(reducer, {
    difficulty: 'easy'
  });
  const [newNpc, setNewNpc] = useState([])
  const [gameGoods, setGameGoods] = useState([])
  const navigate = useNavigate()

  const startGame = () => {
    dispatch({ type: ACTIONS.TURNS })
    dispatch({ type: ACTIONS.NEG_GOODS, payload: gameGoods })
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

    const fetchNegGoods = async () => {
      try {
        const response = await goods.get('/goods');
        setGameGoods(response.data);
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

    fetchNegGoods()
    fetchNpc()
  }, [newGame])

  return (
    <GameContext.Provider value={{
      newGame, dispatch, startGame, newNpc
    }} >
      {children}
    </GameContext.Provider>
  )
}

export default GameContext