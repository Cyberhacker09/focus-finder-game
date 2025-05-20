import React, { useState, useEffect } from "react";
import { Howl } from "howler";

const GameScreen = ({ config }) => {
  const [found, setFound] = useState([]);
  const [message, setMessage] = useState("");
  const [seconds, setSeconds] = useState(0);

  const correctSound = new Howl({ src: ["/sounds/correct.mp3"] });
  const winSound = new Howl({ src: ["/sounds/win.mp3"] });

  useEffect(() => {
    if (message) return;
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [message]);

  const handleClick = (e, imageIndex) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    config.differences.forEach((diff, index) => {
      const withinX = clickX >= diff.x && clickX <= diff.x + diff.width;
      const withinY = clickY >= diff.y && clickY <= diff.y + diff.height;

      if (withinX && withinY && !found.includes(index)) {
        correctSound.play();
        const newFound = [...found, index];
        setFound(newFound);
        if (newFound.length === config.differences.length) {
          winSound.play();
          setMessage("🎉 You found all the differences!");
        }
      }
    });
  };

  return (
    <div className="game-screen">
      <h2>{config.gameTitle}</h2>
      <p>Score: {found.length} / {config.differences.length}</p>
      <p>Time: {seconds} sec</p>
      {message && <h3 style={{ color: "green" }}>{message}</h3>}

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        marginTop: "20px"
      }}>
        {[config.images.image1, config.images.image2].map((src, idx) => (
          <div key={idx} style={{ position: "relative" }}>
            <img
              src={src}
              alt={`Game img ${idx + 1}`}
              width="300"
              onClick={(e) => handleClick(e, idx)}
              style={{ cursor: "pointer", maxWidth: "100%", height: "auto" }}
            />
            {found.map((index) => {
              const diff = config.differences[index];
              return (
                <div
                  key={`${index}-${idx}`}
                  style={{
                    position: "absolute",
                    top: diff.y,
                    left: diff.x,
                    width: diff.width,
                    height: diff.height,
                    border: "2px solid lime",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    backgroundColor: "rgba(0, 255, 0, 0.2)"
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameScreen;
