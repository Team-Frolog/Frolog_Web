import React, { useEffect, useState } from 'react';

const MINUTES = 3 * 60 * 1000;

interface Props {
  reset: boolean;
  setIsExpired: React.Dispatch<React.SetStateAction<boolean>>;
}

function Timer({ reset, setIsExpired }: Props) {
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES);

  useEffect(() => {
    setTimeLeft(MINUTES);
  }, [reset]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1000);
    }, 1000);

    if (timeLeft <= 0) {
      clearInterval(timer);
      setIsExpired(true);
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  return (
    <span className='w-[30px] text-start text-body_sm text-gray-500'>
      {Math.floor((timeLeft / (1000 * 60)) % 60)}:
      {String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0')}
    </span>
  );
}

export default Timer;
