import { useState, useEffect } from "react";
import './Assignmenttwo.css'
const AssignmentTwo = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    //   alert("Time's up!");
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    if (!isRunning) {
      setTimeLeft(minutes * 60 + seconds);
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setMinutes(0);
    setSeconds(0);
  };

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <>
    <h1 className="font">Customizable Countdown Timer</h1>
    <div className="countdown-container">
      <div className="input-group">
        
        <h3>min-</h3>
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(Math.max(0, parseInt(e.target.value) || 0))}
          placeholder="Min"
        />
        <h3>sec-</h3>
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
          placeholder="Sec"
        />
       
      </div>
      <div className="timer-display">{formatTime(timeLeft)}</div>
      <div className="button-group">
        <button onClick={startTimer} disabled={isRunning}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
    </>
  );
};

export default AssignmentTwo;
