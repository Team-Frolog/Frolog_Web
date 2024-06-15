'use client';

import React, { useEffect } from 'react';
import { useAuthActions, useCodeTime } from '@/store/authStore';

function Timer() {
  const expiredTime = useCodeTime();
  const { codeTimePass } = useAuthActions();

  useEffect(() => {
    const timer = setInterval(() => {
      codeTimePass();
    }, 1000);

    if (expiredTime <= 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [expiredTime]);

  return (
    <span className='w-[30px] text-start text-body_sm text-gray-500'>
      {Math.floor((expiredTime / (1000 * 60)) % 60)}:
      {String(Math.floor((expiredTime / 1000) % 60)).padStart(2, '0')}
    </span>
  );
}

export default Timer;
