import { DecreaseIcon, IncreaseIcon } from 'public/icons';
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState<number>(1);

  return (
    <div className='flex gap-[8px]'>
      <button
        type='button'
        onClick={() => setCount((prev) => prev - 1)}
        className='rounded-[12px] bg-gray-200 p-[18px]'
      >
        <DecreaseIcon />
      </button>
      <input
        type='number'
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        className='rounded-[12px] border border-gray-400 bg-white px-[16px] py-[18px] text-center text-title-lg-bold text-gray-800'
      />
      <button
        type='button'
        onClick={() => setCount((prev) => prev + 1)}
        className='rounded-[12px] bg-gray-200 p-[18px]'
      >
        <IncreaseIcon />
      </button>
    </div>
  );
}

export default Counter;
