import { Route, Routes } from 'react-router-dom'
import { GoodsProvider } from './context/GoodsContext';
import { GameProvider } from './context/GameContext';
import './App.scss';
import Layout from './assets/components/Layout';
import Welcome from './assets/components/Welcome';
import GameBox from './assets/components/GameBox';

function App() {
  return (
    <GoodsProvider>
      <GameProvider>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Welcome />} />
            <Route path="game" element={<GameBox /> } />
          </Route>

          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="*" element={<Missing />} /> */}
        </Routes>
      </GameProvider>
    </GoodsProvider>
  );
}

export default App;
