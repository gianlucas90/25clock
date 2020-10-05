import React, { useState } from "react";
import "./App.css";
import { BreakInterval } from "./BreakInterval";
import { SessionLength } from "./SessionLength";
import { Timer } from "./Timer";

function App() {
  const [breakLength, setBreakLength] = useState(() => 5);
  const [sessionLength, setSessionLength] = useState(() => 25);

  const [timerMin, setTimerMin] = useState(() => 25);

  function onIncreseBreakLength() {
    setBreakLength((prevState) => prevState + 1);
  }

  function onDecreaseBreakLength() {
    setBreakLength((prevState) => prevState - 1);
  }

  function onIncreseSessionLength() {
    setSessionLength((prevState) => prevState + 1);
    setTimerMin((prevState) => prevState + 1);
  }

  function onDecreaseSessionLength() {
    setSessionLength((prevState) => prevState - 1);
    setTimerMin((prevState) => prevState - 1);
  }

  function onUpdateTimerMin() {
    setTimerMin((prevState) => prevState - 1);
  }

  function onToggleInterval(isSession) {
    if (isSession) {
      setTimerMin(breakLength);
    } else {
      setTimerMin(sessionLength);
    }
  }

  function onResetTimer() {
    setSessionLength(25);
    setTimerMin(25);
    setBreakLength(5);
  }

  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <div id="settings">
        <BreakInterval
          breakInterval={breakLength}
          increaseBreak={onIncreseBreakLength}
          decreaseBreak={onDecreaseBreakLength}
        />
        <SessionLength
          sessionLength={sessionLength}
          increaseSession={onIncreseSessionLength}
          decreaseSession={onDecreaseSessionLength}
        />
      </div>
      <Timer
        timerMin={timerMin}
        breakLength={breakLength}
        updateTimerMin={onUpdateTimerMin}
        toggleInterval={onToggleInterval}
        resetTimer={onResetTimer}
      />
    </div>
  );
}

export default App;
