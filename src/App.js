import React, { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import { Headre } from './components/Header/Header';

function App() {

  const {tg, onToggleButton} = useTelegram();

  useEffect(() => {
      tg.ready();
  }, [])

  return (
    <div className="App">
      <Header/>
      <button onClick={onToggleButton}>Закрыть</button>
    </div>
  );
}

export default App;
