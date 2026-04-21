import {useEffect, useRef, useState} from 'react';

export function usePressAndHold(onHold: () => void, delay: number) {
  const [isHeld, setIsHeld] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onHoldRef = useRef(onHold);

  useEffect(() => {
    onHoldRef.current = onHold;
  });

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  function onPressIn() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsHeld(true);
      onHoldRef.current();
    }, delay);
  }

  function onPressOut() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsHeld(false);
  }

  return {onPressIn, onPressOut, isHeld};
}
