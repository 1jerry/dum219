import React, { useEffect } from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { useState } from "react";

export const TimerViewH = observer(() => {
  const timer = useLocalObservable(() => ({
    secondsPassed: 0,
    resetTime() {
      this.secondsPassed = 0;
    },
    increaseTimer() {
      this.secondsPassed++;
    }
  }));
  useEffect(() => {
    const handle = setInterval(() => {
      timer.increaseTimer();
    }, 1000);
  }, []);
  return (
    <span onClick={timer.resetTime}>Seconds passed: {timer.secondsPassed}</span>
  );
});
