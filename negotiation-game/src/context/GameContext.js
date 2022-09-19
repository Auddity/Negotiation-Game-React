import { createContext, useReducer, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import npc from '../api/npc'
import goods from '../api/goods'

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
      console.log('dispatched')
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
      console.log(game.gameGoods)
      return
      //assigning game goods (working)
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

const getNegotiationGoods = (arr, n) => {
  let result = new Array(n),
      len = arr.length;
  while(len--) {
    result.push()
  }
}

export const GameProvider = ({ children }) => {
  const [game, dispatch] = useReducer(reducer, {
    difficulty: 'easy'
  });
  const { difficulty, gameNpcs, gameGoods } = game;
  const navigate = useNavigate()

  const startGame = () => {
    dispatch({ type: ACTIONS.TURNS })
    dispatch({ type: ACTIONS.ASSIGN_GAME_GOODS })
    navigate('game')
  }

  // Fetch assets for new game
  // This is called twice, is it because of two States being updated in the Hook despite the dependancy?
  // useEffect(() => {
  //   const fetchGameAssets = async () => {
  //     try {
  //       const npcRes = await npc.get('/api');
  //       const goodsRes = await goods.get('/goods')
  //       dispatch({ type: ACTIONS.GAME_NPCS, payload: npcRes.data.results })
  //       dispatch({type: ACTIONS.GAME_GOODS, payload: goodsRes.data})
  //     } catch(err) {
  //       if(err.response) {
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else {
  //         console.log(`Error: ${err.message}`);
  //       }
  //     }
  //   }
  //   fetchGameAssets();
  //   console.log('useEffect')
  // }, [dispatch])
  
  
  return (
    <GameContext.Provider value={{
      dispatch, startGame, difficulty, gameNpcs, gameGoods
    }} >
      {children}
    </GameContext.Provider>
  )
}

export default GameContext