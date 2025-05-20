import React, { useState, useEffect } from "react";

const ConfigScreen = ({ onStartGame }) => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch("/config.json")
      .then((res) => res.json())
      .then((data) => setConfig(data));
  }, []);

  return (
    <div className="config-screen">
      {config ? (
        <>
          <h1>{config.gameTitle}</h1>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <img src={config.images.image1} alt="image1" width="300" />
            <img src={config.images.image2} alt="image2" width="300" />
          </div>
          <button onClick={() => onStartGame(config)} style={{ marginTop: "20px" }}>
            Start Game
          </button>
        </>
      ) : (
        <p>Loading config...</p>
      )}
    </div>
  );
};

export default ConfigScreen;
