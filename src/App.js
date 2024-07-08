import React, { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';

function App() {

  const {tg, onToggleButton} = useTelegram();

  useEffect(() => {
    if (window.Telegram) {
      tg.ready();
    }
  }, []);

  return (
    <div className="App">
      work
      <button onClick={onToggleButton}>Закрыть</button>
    </div>
  );
}

export default App;
