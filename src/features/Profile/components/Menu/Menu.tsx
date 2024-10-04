'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { bottomSheet } from '@/modules/BottomSheet';
import { sheetData } from '@/data/ui/bottomSheet';
import { signOut } from 'next-auth/react';
import MenuItem from './MenuItem';

function Menu() {
  const router = useRouter();

  return (
    <div className='flex w-full flex-col gap-[28px] px-page'>
      <div className='flex w-full flex-col gap-[20px] border-b border-gray-300 pb-[16px]'>
        <h5 className='text-body-lg text-gray-700'>지원</h5>
        <div className='flex flex-col gap-[32px]'>
          <MenuItem
            name='건의하기'
            onClick={() => {
              window.open(process.env.NEXT_PUBLIC_FORM_URL!);
            }}
          />
          <MenuItem name='이용약관' onClick={() => router.push('/terms')} />
        </div>
      </div>
      <div className='flex w-full flex-col gap-[20px]'>
        <h5 className='text-body-lg text-gray-700'>계정관리</h5>
        <div className='flex flex-col gap-[32px]'>
          <MenuItem
            name='로그아웃'
            onClick={() =>
              bottomSheet.open({
                sheetData: sheetData.logout,
                onClick: () =>
                  signOut({ callbackUrl: '/feed', redirect: true }),
              })
            }
          />
          <MenuItem name='회원탈퇴' onClick={() => router.push('/quit')} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
