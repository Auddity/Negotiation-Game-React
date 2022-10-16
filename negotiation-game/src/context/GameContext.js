import { createContext, useReducer } from "react";
import { useNavigate } from 'react-router-dom'
import { useAxiosFetch } from "../hooks/useAxiosFetch";

const GameContext = createContext({});

export const ACTIONS = {
  SELECTED: 'selected',
  TURNS: 'turns',
  GAME_NPCS: 'game-npcs',
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
    case ACTIONS.GAME_NPCS:
      return { ...game, gameNpcs: payload}
    case ACTIONS.GAME_GOODS:
      if(diff === 'easy') {
        return { ...game, gameGoods: getRandomNumOfGoods(payload, randomValuesRange(3, 4)) }
      }
      if(diff === 'moderate') {
        return { ...game, gameGoods: getRandomNumOfGoods(payload, randomValuesRange(5, 6))}
      }
      if(diff === 'difficult') {
        return { ...game, gameGoods: getRandomNumOfGoods(payload, randomValuesRange(7, 10))}
      }
      return
      // TODO: assigning game goods (working)
      // Links that might help with creating the random array 
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
      
    case ACTIONS.ASSIGN_GAME_GOODS:
      // Select 1 to 5 goods from game good pool
      return 
      
    default:
  }
}

// Determine random values for goods used in each new game.
const randomValuesRange = (min, max) => {
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

// const getNegotiationGoods = (arr, n) => {
//   let result = new Array(...arr).copyWithin(getRandomNumOfGoods(0, arr.length), getRandomNumOfGoods(0, arr.length));
//   console.log(result)
// }


export const GameProvider = ({ children }) => {
  const [game, dispatch] = useReducer(reducer, {
    difficulty: 'easy'
  });
  const { npcData, goodsData, fetchError, isLoading } = useAxiosFetch('https://randomuser.me/api/?results=5&inc=name,picture,nat&noinfo', 'http://localhost:3500/goods')
  const { difficulty, gameNpcs, gameGoods } = game;
  const navigate = useNavigate()

  const startGame = () => {
    dispatch({ type: ACTIONS.TURNS })
    dispatch({ type: ACTIONS.GAME_NPCS, payload: npcData })
    dispatch({ type: ACTIONS.GAME_GOODS, payload: goodsData })
    // dispatch({ type: ACTIONS.ASSIGN_GAME_GOODS })
    navigate('game')
  }

  console.log(game);
  
  return (
    <GameContext.Provider value={{
      dispatch, startGame, difficulty, gameNpcs, gameGoods, isLoading, fetchError
    }} >
      {children}
    </GameContext.Provider>
  )
}

export default GameContext