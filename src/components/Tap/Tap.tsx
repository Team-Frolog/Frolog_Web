'use client';

import React from 'react';

interface Props {
  taps: {
    id: number;
    label: string;
    name: string;
  }[];
  currentTap: string;
  defaultTap: string;
  onChangeTap: (label: string) => void;
}

function Tap({ taps, currentTap, defaultTap, onChangeTap }: Props) {
  return (
    <div className='flex w-full flex-col bg-white'>
      <div className='grid w-full grid-cols-2 pb-[2px]'>
        {taps.map((tap) => (
          <button
            key={tap.id}
            type='button'
            onClick={() => onChangeTap(tap.label)}
            className={`p-[16px] text-body-xl-bold ${currentTap === tap.label ? 'text-gray-900' : 'text-gray-500'}`}
          >
            {tap.name}
          </button>
        ))}
      </div>
      <div className='relative h-[2px] w-full bg-gray-500'>
        <div
          className={`absolute bottom-0 h-full w-1/2 bg-gray-900 transition-all ${currentTap === defaultTap ? 'left-0' : 'left-1/2'}`}
        />
      </div>
    </div>
  );
}

export default Tap;
