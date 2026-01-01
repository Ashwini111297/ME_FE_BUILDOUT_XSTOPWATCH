import { useEffect, useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime = `${minutes}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;

  return (
    <div>
      <h1>Stopwatch</h1>

      {/* 🔥 THIS LINE IS THE KEY FIX */}
      <p>Time: {formattedTime}</p>

      <button onClick={handleStartStop}>
        {isRunning ? "Stop" : "Start"}
      </button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
