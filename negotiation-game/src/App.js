import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.scss';
import api from './api/goods';
import Layout from './assets/components/Layout';
import Welcome from './assets/components/Welcome';
import GameBox from './assets/components/GameBox';

function App() {
  const [headerGoods, setHeaderGoods] = useState([])
  const [newGame, setNewGame] = useState(false);
  const [newNpc, setNewNpc] = useState({})
  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchGoods = async () => {
      try {
        const response = await api.get('/goods')
        setHeaderGoods(response.data)
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

    fetchGoods()
  }, [])

  const startGame = () => {
    // Code that loads game assets.

    navigate('game')    
  }

  return (
    <Routes>
      <Route path="/" element={<Layout 
        headerGoods={headerGoods}
      />} >
        <Route index element={<Welcome 
          startGame={startGame}
        />} />
        <Route path="game" element={<GameBox /> } />
      </Route>

      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="*" element={<Missing />} /> */}
    </Routes>
  );
}

export default App;
