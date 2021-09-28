import React from "react";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

class Timer {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }
}

const myTimer = new Timer();

setInterval(() => {
  myTimer.increaseTimer();
}, 1000);

// A function component wrapped with `observer` will reacts to any
// future change in an observable it used before
export const TimerView = observer(({ timer }: { timer: Timer }) => (
  <span>Seconds passed: {timer.secondsPassed}</span>
));

