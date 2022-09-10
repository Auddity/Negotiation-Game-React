import { createContext, useState, useReducer, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import npc from '../api/npc'
import goods from '../api/goods'

const GameContext = createContext({});

export const ACTIONS = {
  SELECTED: 'selected',
  TURNS: 'turns',
  GAME_GOODS: 'game-goods',
  ASSIGN_GAME_GOODS: 'assign-game-goods'
}

const reducer = (game, { type, payload }) => {
  const diff = game.difficulty;
  
  switch(type) {
    case ACTIONS.SELECTED:
      return { ...game, difficulty: payload }
    case ACTIONS.TURNS:
      if(diff === 'easy') {
        return { ...game, turns: 3 }
      }
      if(diff === 'moderate') {
        return { ...game, turns: 3 }
      }
      if(diff === 'difficult') {
        return { ...game, turns: 4 }
      }
      return
    case ACTIONS.GAME_GOODS:
      if(diff === 'easy') {
        return { ...game, gameGoods: getRandomNumOfGoods(payload, difficultyRandomValues(3, 4)) }
      }
      if(diff === 'moderate') {
        return { ...game, gameGoods: getRandomNumOfGoods(payload, difficultyRandomValues(5, 6))}
      }
      if(diff === 'difficult') {
        return { ...game, gameGoods: getRandomNumOfGoods(payload, difficultyRandomValues(7, 10))}
      }
      return
      //assigning game goods (working)
    case ACTIONS.ASSIGN_GAME_GOODS:
      return
      
    default:
  }
}

// Determine random values for goods used in each new game.
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
  const [game, dispatch] = useReducer(reducer, {
    difficulty: 'easy'
  });
  const [newNpc, setNewNpc] = useState([])
  const [gameGoods, setGameGoods] = useState([])
  const [isNew, setIsNew] = useState(false)
  const navigate = useNavigate()

  const startGame = () => {
    setIsNew(prev => prev = !prev)
    dispatch({ type: ACTIONS.TURNS })
    dispatch({ type: ACTIONS.GAME_GOODS, payload: gameGoods })

    navigate('game')
  }

  // Fetch assets for new game
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
  }, [isNew])

  console.log(isNew);
  
  return (
    <GameContext.Provider value={{
      game, dispatch, startGame, newNpc, gameGoods
    }} >
      {children}
    </GameContext.Provider>
  )
}

export default GameContext