'use client';

import React, { useEffect, useState } from 'react';
import { useAuthActions, useCodeTime } from '@/store/authStore';

function Timer() {
  const expiredTime = useCodeTime();
  const { setEndTime } = useAuthActions();
  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  useEffect(() => {
    if (expiredTime !== null) {
      setRemainingTime(expiredTime - Date.now());
    }
  }, []);

  useEffect(() => {
    if (expiredTime === null) return;

    const updateRemainingTime = () => {
      const now = Date.now();
      const timeLeft = expiredTime - now;

      if (timeLeft <= 0) {
        setRemainingTime(0);
        setEndTime(0);
      } else {
        setRemainingTime(timeLeft);
      }
    };

    updateRemainingTime();
    const timer = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(timer);
  }, [expiredTime]);

  if (remainingTime === null) return null;

  return (
    <span className='w-[30px] text-start text-body_sm text-gray-500'>
      {Math.floor((remainingTime / (1000 * 60)) % 60)}:
      {String(Math.floor((remainingTime / 1000) % 60)).padStart(2, '0')}
    </span>
  );
}

export default Timer;
