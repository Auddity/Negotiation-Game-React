import { useState, useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { DataProvider } from './context/GoodsContext';
import './App.scss';
import Layout from './assets/components/Layout';
import Welcome from './assets/components/Welcome';
import GameBox from './assets/components/GameBox';

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

function App() {
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
    <DataProvider>
      <Routes>
        <Route path="/" element={<Layout 
          newGame={newGame}
          dispatch={dispatch}
          />} >
          <Route index element={<Welcome 
            startGame={startGame}
            />} />
          <Route path="game" element={<GameBox /> } />
        </Route>

        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="*" element={<Missing />} /> */}
      </Routes>
    </DataProvider>
  );
}

export default App;
