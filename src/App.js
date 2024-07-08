import React, { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';

function App() {

  const {tg, onToggleButton} = useTelegram();

  useEffect(() => {
      tg.ready();
  }, [])

  return (
    <div className="App">
      <button onClick={onToggleButton}>Закрыть</button>
    </div>
  );
}

export default App;
