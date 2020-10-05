import React, { useState, useEffect } from "react";
import Bell from "../audio/bell.mp3";

export const Timer = (props) => {
  const [isSession, setIsSession] = useState(() => true);
  const [isActive, setIsActive] = useState(() => false);
  const [timerSec, setTimerSec] = useState(() => 0);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setTimeout(decreaseTimer, 1000);
      return () => clearTimeout(interval);
    }
    return undefined;
  }, [isActive, timerSec, props.timerMin]);

  function decreaseTimer() {
    switch (timerSec) {
      case 1:
        if (props.timerMin === 0) {
          document.getElementById("beep").play();
          setTimerSec((prevState) => prevState - 1);
        }
        break;
      case 0:
        if (props.timerMin === 0) {
          if (isSession) {
            setIsSession(false);
            props.toggleInterval(isSession);
          } else {
            setIsSession(true);
            props.toggleInterval(isSession);
          }
        } else {
          setTimerSec(59);
          props.updateTimerMin();
        }
        break;
      default:
        setTimerSec((prevState) => prevState - 1);
        break;
    }
  }

  function toggleTimer() {
    setIsActive(!isActive);
  }

  function stopAudio() {
    const audio = document.querySelector("#beep");
    audio.pause();
    audio.currentTime = 0;
  }

  function resetTimer() {
    setIsSession(true);
    setIsActive(false);
    setTimerSec(0);
    stopAudio();
    props.resetTimer();
  }

  return (
    <div>
      <div id="timer">
        <h2 id="timer-label">{isSession === true ? "Session" : "Break"}</h2>
        <time id="time-left" dateTime="mm:ss">
          <span>
            {props.timerMin === 0
              ? "00"
              : props.timerMin < 10
              ? "0" + props.timerMin
              : props.timerMin}
          </span>
          <span>:</span>
          <span>
            {timerSec === 0 ? "00" : timerSec < 10 ? "0" + timerSec : timerSec}
          </span>
        </time>
      </div>
      <div id="controls">
        <div id="start_stop" onClick={toggleTimer}>
          play/pause
        </div>
        <div id="reset" onClick={resetTimer}>
          reset
        </div>
        <audio id="beep">
          <source src={Bell} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};
