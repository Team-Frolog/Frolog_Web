'use client';

import WithWebViewTheme from '@/components/HOC/WithWebViewTheme';
import { PAGES } from '@/constants/page';
import { usePathname, useRouter } from 'next/navigation';
import { BackIcon } from 'public/icons';
import React from 'react';

/** 프로필 페이지에서 활용되는 타이틀 헤더
 * - 경로별로 적절한 타이틀을 적용합니다.
 * - 이용약관, 앱 설치방법 페이지에서 활용됩니다.
 */
function ProfileTitleHeader() {
  const router = useRouter();
  const pathname = usePathname();

  const titles: Record<string, React.ReactNode> = {
    [PAGES.QUIT]: (
      <h3 className='text-heading-md-bold text-gray-800'>정말 탈퇴하나요?</h3>
    ),
    [PAGES.TERMS]: (
      <h3 className='text-heading-md-bold text-gray-800'>이용약관</h3>
    ),
    [PAGES.INSTALL]: (
      <h3 className='text-heading-md-bold text-gray-800'>
        <strong className='text-heading-md-bold text-main'>프롤로그</strong>를
        <br />
        앱으로 즐기세요!
      </h3>
    ),
  };

  const renderTitle = () => {
    const matchedKey = Object.keys(titles).find((key) =>
      pathname.includes(key)
    );
    return matchedKey ? titles[matchedKey] : null;
  };

  return (
    <WithWebViewTheme bgColor='white'>
      <header className='block w-full gap-[12px] bg-white px-page pb-[20px] pt-[24px]'>
        <button
          type='button'
          className='cursor-pointer'
          onClick={() => router.back()}
        >
          <BackIcon fill='#727384' />
        </button>
        {renderTitle()}
      </header>
    </WithWebViewTheme>
  );
}

export default ProfileTitleHeader;
