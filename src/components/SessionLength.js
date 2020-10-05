import React from "react";

export const SessionLength = (props) => {
  function decreaseSession() {
    if (props.sessionLength === 1) {
      return;
    }
    props.decreaseSession();
  }

  function increaseSession() {
    if (props.sessionLength === 60) {
      return;
    }
    props.increaseSession();
  }
  return (
    <div id="session">
      <h2 id="session-label">Session Length</h2>
      <div className="plusMin">
        <button
          id="session-decrement"
          className="symbol"
          onClick={decreaseSession}
        >
          -
        </button>
        <p id="session-length">{props.sessionLength}</p>
        <button
          id="session-increment"
          className="symbol"
          onClick={increaseSession}
        >
          +
        </button>
      </div>
    </div>
  );
};
