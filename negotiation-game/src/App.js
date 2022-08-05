import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.scss';
import data from './assets/json/data.json';
import Layout from './assets/components/Layout';
import Welcome from './assets/components/Welcome';
import GameBox from './assets/components/GameBox';

function App() {
  const {newGame, setNewGame} = useState(false);
  const {newNpc, setNewNpc} = useState({})
  
  // useEffect(() => {
  //   fetch('https://randomuser.me/api/')
  //     .then(res => res.json())
  //     .then(data => setNewNpc(data.results[0]))
  // }, [newGame])

  

  return (
    <Routes>
      <Route path="/" element={<Layout 
        goodsData={data}
      />} >
        <Route index element={<Welcome />} />
        <Route path="game" element={<GameBox /> } />
      </Route>

      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="*" element={<Missing />} /> */}
    </Routes>
  );
}

export default App;
