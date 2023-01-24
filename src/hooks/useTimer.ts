import { useState, useEffect, useCallback } from 'react';

export const useTimer = () => {
  const [timer, setTimer] = useState(0);

  const [isActive, setIsActive] = useState(false);

  const start = useCallback(() => {
    setIsActive(true);
  }, []);

  const pause = useCallback(() => {
    setIsActive(false);
  }, []);

  const reset = useCallback(() => {
    setIsActive(false);
    setTimer(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isActive) {
        setTimer((prevTimer) => prevTimer + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive]);

  return [
    { timer, isActive },
    { start, pause, reset },
  ] as const;
};
