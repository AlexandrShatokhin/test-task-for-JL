import { useState, useEffect, useRef, useCallback } from 'react';

interface UseCountdownReturn {
  countdown: number;
  reset: () => void;
  isActive: boolean;
}

export const useCountdown = (initialTime: number = 5): UseCountdownReturn => {
  const [countdown, setCountdown] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const reset = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    setCountdown(initialTime);
    setIsActive(true);
    
    timerRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          setIsActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [initialTime]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  return { countdown, reset, isActive };
};