'use client';

import { PAGES } from '@/constants/page';
import { usePathname, useRouter } from 'next/navigation';
import { BackIcon } from 'public/icons';
import React from 'react';

function ProfileTitleHeader() {
  const router = useRouter();
  const pathname = usePathname();

  const getTitle = (path: string) => {
    switch (path) {
      case PAGES.QUIT:
        return (
          <h3 className='text-heading-md-bold text-gray-800'>
            정말 탈퇴하나요?
          </h3>
        );
      case PAGES.TERMS:
        return <h3 className='text-heading-md-bold text-gray-800'>이용약관</h3>;
      case PAGES.INSTALL:
        return (
          <h3 className='text-heading-md-bold text-gray-800'>
            <strong className='text-heading-md-bold text-main'>프롤로그</strong>
            를<br />
            앱으로 즐기세요!
          </h3>
        );
      default:
    }
  };

  return (
    <header className='block w-full gap-[12px] bg-white px-page pb-[20px] pt-[24px]'>
      <button
        type='button'
        className='cursor-pointer'
        onClick={() => router.back()}
      >
        <BackIcon fill='#727384' />
      </button>
      {getTitle(pathname)}
    </header>
  );
}

export default ProfileTitleHeader;
