import React from "react";
import ReactDOM from "react-dom";
import { TimerView, myTimer } from "./timer-class";
import { TimerViewH } from "./timer-hooks"

const App = () => {
  return (
    <>
      <TimerView timer={myTimer} />
      <div><TimerViewH /></div>
    </>
  );
};

ReactDOM.render(<App />, document.body);
