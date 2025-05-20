import React, { useState } from "react";
import ConfigScreen from "./components/ConfigScreen";
import GameScreen from "./components/GameScreen";
import "./App.css";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [config, setConfig] = useState(null);

  const handleStartGame = (configData) => {
    setConfig(configData);
    setGameStarted(true);
  };

  return (
    <div className="App">
      {!gameStarted ? (
        <ConfigScreen onStartGame={handleStartGame} />
      ) : (
        <GameScreen config={config} />
      )}
    </div>
  );
}

export default App;
