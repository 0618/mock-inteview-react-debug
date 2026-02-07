import { useEffect, useState } from 'react';

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // TODO: Bug 3 - Timer gets stuck at 1s
      setSeconds(seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
      Time Elapsed: {seconds}s
    </div>
  );
};
