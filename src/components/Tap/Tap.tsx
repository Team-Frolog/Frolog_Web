'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

interface Props {
  taps: {
    id: number;
    label: string;
    name: string;
  }[];
  currentTap: string;
}

function Tap({ taps, currentTap }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className='flex w-full flex-col'>
      <div className='grid w-full grid-cols-2 pb-[2px]'>
        {taps.map((tap) => (
          <button
            key={tap.id}
            type='button'
            onClick={() => router.replace(`${pathname}?tap=${tap.label}`)}
            className={`p-[16px] text-body-xl-bold ${currentTap === tap.label ? 'text-gray-900' : 'text-gray-500'}`}
          >
            {tap.name}
          </button>
        ))}
      </div>
      <div className='relative h-[2px] w-full bg-gray-500'>
        <div
          className={`absolute bottom-0 h-full w-1/2 bg-gray-900 transition-all ${currentTap === 'followers' ? 'left-0' : 'left-1/2'}`}
        />
      </div>
    </div>
  );
}

export default Tap;
