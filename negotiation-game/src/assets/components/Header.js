import React from 'react';
import GoodsBox from './GoodsBox';
import '../scss/_Header.scss';
import { useContext } from 'react';
import GameContext, { ACTIONS } from '../../context/GameContext';
import GoodsContext from '../../context/GoodsContext';

const Header = () => {
  const { headerGoods } = useContext(GoodsContext)
  const { newGame, dispatch } = useContext(GameContext)
  console.log(newGame);
  return (
    <header className='App-header'>
        {
          headerGoods.map(item => {
            return <GoodsBox
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            image={item.image}
            />
          })
        }
      <form className="difficultyCtnr">
        <fieldset>
          <input 
            type="radio" 
            name="easy" 
            id="easy"
            value="easy"
            checked={newGame.difficulty === "easy"} 
            onChange={e => dispatch({ type: ACTIONS.SELECTED, payload: e.target.value })}/>
          <label htmlFor="easy">Easy</label>

          <input 
            type="radio" 
            name="moderate" 
            id="moderate"
            value="moderate" 
            checked={newGame.difficulty === "moderate"} 
            onChange={e => dispatch({ type: ACTIONS.SELECTED, payload: e.target.value})}/>
          <label htmlFor="moderate">Moderate</label>
          
          <input 
            type="radio" 
            name="difficult" 
            id="difficult"
            value="difficult" 
            checked={newGame.difficulty === "difficult"}
            onChange={e => dispatch({ type: ACTIONS.SELECTED, payload: e.target.value })}/>
          <label htmlFor="difficult">Difficult</label>
        </fieldset>
      </form>
    </header>
  )
}

export default Header;