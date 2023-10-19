import React, { useEffect, useState } from "react";
import useKeyPress from "../Hooks/Keypress";

function Typegame(props) {
  const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [currentchar, setcurrent] = useState(text.charAt(0));
  const [outgoingChars, setOutgoingChars] = useState("");
  const [incomingChars, setIncomingChars] = useState(text.substr(1));
  const [accuracy, setaccuracy] = useState(100);
  const [typedletters, settypedletters] = useState("");
  const [errors, seterrors] = useState(0);
  const [errorcolor, seterrorcolor] = useState(true);
  const completed = "completed";
  useEffect(() => {
    if (props.reset) {
      props.handleReset();
      setcurrent(text.charAt(0));
      setOutgoingChars("");
      setIncomingChars(text.substr(1));
      setaccuracy(100);
      seterrors(0);
      props.setreset(false);
    }
  }, [props.reset]);
  useKeyPress((key) => {
    let updatedOutgoingChars = outgoingChars;
    let updatedIncomingChars = incomingChars;
    const updatedTypedChars = typedletters + key;
    settypedletters(updatedTypedChars);

    if (key === currentchar && incomingChars.length != 0) {
      props.setIsActive(true);
      props.setIsPaused(false);
      seterrorcolor(true);
      // updatedOutgoingChars += currentchar;
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
    } else if (incomingChars < 1) {
      props.handlePauseResume();
      setcurrent(completed);
    } else {
      seterrorcolor(false);
      seterrors((error) => error + 1);
    }
  });

  return (
    <div className="main-atoz">
      <div className="alphabets">
        <p className="letters">
          <span
            id="currentletter"
            className={errorcolor ? "span" : "spanerror"}
          >
            {currentchar}
          </span>
        </p>
        <div className="accu-erros">
          <span className="accuracy">ACCURACY : {accuracy}%</span>
          <span className="errors">ERRORS : {errors}</span>
        </div>
      </div>
    </div>
  );
}

export default Typegame;
