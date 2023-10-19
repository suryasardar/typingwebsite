import React from "react";
import Timer from "../components/timer";
import Typegame from "../components/Typegame";
import {useState} from 'react';


function Atoz() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [reset,setreset]=useState(false)
  
  

  React.useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  
    const handleStart = () => {
      setIsActive(true)
      setIsPaused(false);
    };
    
 

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  const resetboard = ()=>{
    setreset(true)
    console.log('ji');
  }
  // handleStart()
  let props={handleReset,handlePauseResume,handleStart,setIsActive,setIsPaused,time,reset,setreset}

  return (
    <div className="atoz">
      
      <div className="container-atoz">
        <div className="header-atoz">
          <div className="title-atoz">
            <h1>ALPHABETS: A TO Z</h1>
            <button className="reset-btn" onClick={resetboard}>Reset</button>
          </div>
          <div className="line"></div>
        </div>
        <Timer {...props} />
        <Typegame {...props} />
      </div>
    </div>
  );
}

export default Atoz;
