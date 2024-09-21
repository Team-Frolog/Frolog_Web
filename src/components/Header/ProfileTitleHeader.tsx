'use client';

import { usePathname } from 'next/navigation';
import { BackIcon } from 'public/icons';
import React from 'react';

function ProfileTitleHeader() {
  const pathname = usePathname();

  return (
    <div className='block w-full gap-[12px] px-page pb-0 pt-[50px]'>
      <button type='button' className='cursor-pointer' onClick={() => {}}>
        <BackIcon fill='#727384' />
      </button>
      <h3 className='text-heading-md-bold'>
        {pathname === '/quit' ? '정말 탈퇴하나요?' : '이용약관'}
      </h3>
    </div>
  );
}

export default ProfileTitleHeader;
