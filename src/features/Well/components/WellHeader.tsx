'use client';

import React from 'react';
import { EditIcon } from 'public/icons';
import { useSession } from 'next-auth/react';

function WellHeader() {
  const { data: session } = useSession();

  return (
    <div className='absolute left-[50%] top-0 z-10 flex w-[450px] translate-x-[-50%] gap-[20px] pt-[70px] mobile:left-0 mobile:w-full mobile:translate-x-0'>
      {session && (
        <button type='button' className='absolute right-[28px] top-[28px] z-20'>
          <EditIcon />
        </button>
      )}
    </div>
  );
}

export default WellHeader;
