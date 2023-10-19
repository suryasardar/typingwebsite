import React, { useEffect, useState } from "react";

function Hook(callback) {
  const [hooks, sethooks] = useState();

  const down = (key) => {
    sethooks(key)
    console.log(hooks);
  };
  window.addEventListener("keydown", down);
}
export default Hook;
