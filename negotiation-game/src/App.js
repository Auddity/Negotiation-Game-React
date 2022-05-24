import './App.scss';
import data from './assets/json/data.json';
import Header from './assets/components/Header';
import GameBox from './assets/components/GameBox';

function App() {
  return (
    <div className="App">
      <Header 
        data={data}
      />
      <GameBox />
    </div>
  );
}

export default App;
