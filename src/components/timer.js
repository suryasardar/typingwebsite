import React from "react";

function Timer(props) {
  return (
    <div className="timer-score">
      <div className="time">
        <p className="time-text">Timer</p>
        <div>
          <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.</span>

          <span> {("0" + ((props.time / 10) % 100)).slice(-2)}</span>
        </div>
      </div>
    </div>
  );
}

export default Timer;
