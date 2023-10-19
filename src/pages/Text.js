import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import useKeyPress from "../Hooks/Keypress";
import clickaudio from "../Audio/click.mp3.mp3";
import erroraudio from "../Audio/Oops.mp3";
import hurrayaudio from "../Audio/hurray.mp3";

const text = faker.random.words(13);
const currentTime = () => new Date().getTime();

function Text() {
  const [start, setstart] = useState(true);
  const [currentchar, setcurrent] = useState(text.charAt(0));
  const [outgoingChars, setOutgoingChars] = useState("");
  const [incomingChars, setIncomingChars] = useState(text.substr(1));
  const [accuracy, setaccuracy] = useState(100);
  const [typedletters, settypedletters] = useState("");
  const [startTime, setStartTime] = useState();
  const [wordCount, setWordCount] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [errors, seterror] = useState(false);
  const click = new Audio(clickaudio);
  const error = new Audio(erroraudio);
  const end = new Audio(hurrayaudio);
  useKeyPress((key) => {
    if (!startTime) {
      setStartTime(currentTime());
    }
    let updatedOutgoingChars = outgoingChars;
    let updatedIncomingChars = incomingChars;
    const updatedTypedChars = typedletters + key;
    settypedletters(updatedTypedChars);
    if (key === currentchar && incomingChars.length != 0) {
      click.play();
      seterror(false);
      if (incomingChars.charAt(0) === " ") {
        setWordCount(wordCount + 1);

        const durationInMinutes = (currentTime() - startTime) / 60000.0;

        setWpm(((wordCount + 1) / durationInMinutes).toFixed(2));
      }
      updatedOutgoingChars += currentchar;
      setaccuracy(
        (
          (updatedOutgoingChars.length * 100) /
          updatedTypedChars.length
        ).toFixed(2)
      );

      setOutgoingChars(updatedOutgoingChars);
      setcurrent(incomingChars.charAt(0));
      updatedIncomingChars = incomingChars.substring(1);

      setIncomingChars(updatedIncomingChars);
      // }
    } else if (incomingChars.length < 1) {
      end.play();
      // console.log('end')
      setstart(false);
    } else {
      seterror(true);
      error.play();
    }
  });

  return (
    <div className="text">
      <div className="text-container">
        <div className="text-header">
          <h1 className="text-header-content">TOUCH TYPING</h1>
          <button
            className="reset-btn"
            onClick={() => window.location.reload(false)}
          >
            Reset
          </button>
        </div>
        <div className="line"></div>
        <div>
          <div className="score">
            <h1>ACCURACY : {accuracy} %</h1>
            <h1>WPM : {wpm}</h1>
          </div>
          <p className="text-words">
            <span className="outgoing">{outgoingChars}</span>
            <span className={errors ? "currentchar errorchar" : "currentchar"}>
              {currentchar}
            </span>
            <span>{incomingChars}</span>
          </p>
          <div className="footer">
            {start ? (
              <h1>Start Typing...</h1>
            ) : (
              <h1 className="color">Completed</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text;
