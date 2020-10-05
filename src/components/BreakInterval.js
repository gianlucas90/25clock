import React from "react";

export const BreakInterval = (props) => {
  function decreaseCounter() {
    if (props.breakInterval === 1) {
      return;
    }
    props.decreaseBreak();
  }

  function increaseCounter() {
    if (props.breakInterval === 60) {
      return;
    }
    props.increaseBreak();
  }

  return (
    <div id="break">
      <h2 id="break-label">Break Length</h2>
      <div className="plusMin">
        <button
          id="break-decrement"
          className="symbol"
          onClick={decreaseCounter}
        >
          -
        </button>
        <p id="break-length">{props.breakInterval}</p>
        <button
          id="break-increment"
          className="symbol"
          onClick={increaseCounter}
        >
          +
        </button>
      </div>
    </div>
  );
};
