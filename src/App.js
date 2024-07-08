import React, { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    if (window.Telegram) {
      tg.ready();
    }
  }, []);

  const onClose = () => {
    if (window.Telegram) {
      tg.close();
    }
  };

  return (
    <div className="App">
      work
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
