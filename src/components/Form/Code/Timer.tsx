'use client';

import React, { useEffect, useState } from 'react';
import { useAuthActions, useCodeTime } from '@/store/authStore';

/** 인증번호 input의 타이머 컴포넌트
 * - useAuthStore를 기반으로 동작합니다.
 */
function Timer() {
  const expiredTime = useCodeTime();
  const { setEndTime } = useAuthActions();
  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  /** expiredTime이 설정된 경우(인증번호 전송 요청 후), state에 저장 */
  useEffect(() => {
    if (expiredTime !== null) {
      setRemainingTime(expiredTime - Date.now());
    }
  }, [expiredTime]);

  /** 1초마다 남은 시간을 줄이는 useEffect */
  useEffect(() => {
    if (expiredTime === null) return;

    let timeoutId: number;

    const updateRemainingTime = () => {
      const now = Date.now();
      const timeLeft = expiredTime - now;

      if (timeLeft <= 0) {
        setRemainingTime(0);
        setEndTime(0);
      } else {
        setRemainingTime(timeLeft);
        timeoutId = window.setTimeout(updateRemainingTime, 1000);
      }
    };

    updateRemainingTime();

    return () => clearTimeout(timeoutId);
  }, [expiredTime, setEndTime]);

  if (remainingTime === null) return null;

  return (
    <span className='w-[30px] text-start text-body-sm text-gray-500'>
      {Math.floor((remainingTime / (1000 * 60)) % 60)}:
      {String(Math.floor((remainingTime / 1000) % 60)).padStart(2, '0')}
    </span>
  );
}

export default Timer;
