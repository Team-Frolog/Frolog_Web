'use client';

import React from 'react';
import { bottomSheet } from '@/modules/BottomSheet';
import { signOut } from 'next-auth/react';
import useSessionStore from '@/store/sessionStore';
import { PAGES } from '@/constants/page';
import MenuItem from './MenuItem';

function Menu() {
  const clearSession = useSessionStore.persist.clearStorage;

  return (
    <div className='flex w-full flex-col gap-[28px] px-page'>
      <div className='flex w-full flex-col gap-[20px] border-b border-gray-300 pb-[16px]'>
        <h5 className='text-body-lg text-gray-700'>지원</h5>
        <div className='flex flex-col gap-[32px]'>
          <MenuItem name='앱 설치하기' theme='highlight' href={PAGES.INSTALL} />
          <MenuItem
            name='건의하기'
            onClick={() => {
              window.open(process.env.NEXT_PUBLIC_FORM_URL!);
            }}
          />
          <MenuItem name='이용약관' href={PAGES.TERMS} />
        </div>
      </div>
      <div className='flex w-full flex-col gap-[20px]'>
        <h5 className='text-body-lg text-gray-700'>계정관리</h5>
        <div className='flex flex-col gap-[32px]'>
          <MenuItem
            name='로그아웃'
            onClick={() =>
              bottomSheet.open({
                sheetKey: 'logout',
                onClick: () => {
                  clearSession();
                  signOut({ callbackUrl: PAGES.HOME, redirect: true });
                },
              })
            }
          />
          <MenuItem name='회원탈퇴' href={PAGES.QUIT} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
