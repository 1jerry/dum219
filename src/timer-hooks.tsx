import React, { useEffect } from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { useState } from "react";
import { autorun } from "mobx";

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
    return () => {
      clearInterval(handle);
    };
  }, []);

  useEffect(() => {
    autorun(() => {
      if (timer.secondsPassed === 60) alert("It's been a minute already");
    });
  }, []);
  return (
    <span onClick={timer.resetTime}>Seconds passed: {timer.secondsPassed}</span>
  );
});
