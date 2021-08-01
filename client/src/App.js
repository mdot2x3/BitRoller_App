import React, { useState, useEffect } from "react";
import "./App.css";
import CriticalSuccessModal from "./components/CriticalSuccessModal";
import CriticalFailureModal from "./components/CriticalFailureModal";

function App() {
  const [result, setResult] = useState(0);
  const [criticalSuccessModal, setCriticalSuccessModal] = useState(false);
  const [criticalFailureModal, setCriticalFailureModal] = useState(false);
  const [effectLogs, setEffectLogs] = useState([]);

  let audio = new Audio("/assets/Rollsound.mp3");
  const startAudio = () => {
    audio.play();
  };

  useEffect(() => {
    if (result === 20) {
      setCriticalSuccessModal(true);
    } else {
      setCriticalSuccessModal(false);
    }
    if (result === 1) {
      setCriticalFailureModal(true);
    } else {
      setCriticalFailureModal(false);
    }
  }, [result]);

  useEffect(() => {
    setEffectLogs((prevEffectLogs) => [result, ...prevEffectLogs]);
  }, [result]);

  return (
    <div className="App">
      {criticalSuccessModal && (
        <CriticalSuccessModal closeModal={setCriticalSuccessModal} />
      )}
      {criticalFailureModal && (
        <CriticalFailureModal closeModal={setCriticalFailureModal} />
      )}

      <div className="card-main">
        <div className="card-header">
          BitRoller
          <img
            src={process.env.PUBLIC_URL + "/assets/dice2.png"}
            alt="diceHeader"
          />
        </div>

        <div className="card-body">
          <div className="card-body-header">
            <h1>Test your luck!</h1>
            <h2>Roll for initiative. Use bits. Show your love.</h2>
          </div>

          <button
            onClick={() => {
              startAudio();
              setResult(Math.floor(Math.random() * 20 + 1));
            }}
          >
            Roll
          </button>

          <button>Bit-Multiplier</button>

          <div className="gif-area">
            {result ? (
              <img
                src={process.env.PUBLIC_URL + "/assets/" + `${result}.gif`}
                alt="diceGif"
              />
            ) : null}
            {/* <h1>{result}</h1> */}
          </div>

          <div className="previous-rolls">
            <h2>Previous Rolls</h2>
            {effectLogs.slice(0, 5).map((effect, index) => (
              <div key={index}>
                <h2>{"🐲".repeat(effect) + effect}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="card-footer">
          <p>Created by Max</p>
          <p>Click here to view more projects</p>
        </div>
      </div>
    </div>
  );
}

export default App;
