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
            name="medium" 
            id="medium"
            value="medium" 
            checked={newGame.difficulty === "medium"} 
            onChange={e => dispatch({ type: ACTIONS.SELECTED, payload: e.target.value})}/>
          <label htmlFor="medium">Medium</label>
          
          <input 
            type="radio" 
            name="hard" 
            id="hard"
            value="hard" 
            checked={newGame.difficulty === "hard"}
            onChange={e => dispatch({ type: ACTIONS.SELECTED, payload: e.target.value })}/>
          <label htmlFor="hard">Hard</label>
        </fieldset>
      </form>
    </header>
  )
}

export default Header;