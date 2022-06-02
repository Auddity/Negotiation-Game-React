import { useState, useEffect } from 'react';
import './App.scss';
import data from './assets/json/data.json';
import Header from './assets/components/Header';
import GameBox from './assets/components/GameBox';

function App() {
  const {newGame, setNewGame} = useState(false);
  const {newNpc, setNewNpc} = useState({})
  
  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => setNewNpc(data.results[0]))
  }, [newGame])

  console.log(newNpc);

  return (
    <div className="App">
      <Header 
        data={data}
      />
      <GameBox 
        // newGame={newGame}
      />

      <input 
        type="button" 
        onClick={() => setNewGame(true)}  
      />
    </div>
  );
}

export default App;
