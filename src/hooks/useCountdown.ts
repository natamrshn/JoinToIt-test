import {useEffect, useRef, useState} from 'react';

export function useCountdown(initialSeconds: number) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function clearCountdown() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  useEffect(() => {
    if (!isRunning) {
      clearCountdown();
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft(prev => (prev <= 1 ? 0 : prev - 1));
    }, 1000);

    return () => {
      clearCountdown();
    };
  }, [isRunning]);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsRunning(false);
    }
  }, [timeLeft]);

  function start() {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  }

  function pause() {
    setIsRunning(false);
  }

  function reset() {
    clearCountdown();
    setIsRunning(false);
    setTimeLeft(initialSeconds);
  }

  return {timeLeft, isRunning, start, pause, reset};
}
