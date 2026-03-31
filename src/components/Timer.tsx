import { useEffect, useState } from 'react';

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
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
