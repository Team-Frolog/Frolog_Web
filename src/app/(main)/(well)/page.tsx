'use client';

import React from 'react';
import { WellHeader, WellBookList, WellTitle } from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';
import { useSession } from 'next-auth/react';
import { ArrowIcon, PlusIcon } from 'public/icons';
import Pointing from '@/features/Well/components/Pointing';
import { PAGES } from '@/constants/page';
import Link from 'next/link';

function WellPage() {
  const { data: session } = useSession();

  return (
    <>
      <MainLayout extraClass={`bg-[url('/well-bg.svg')] bg-gray-300`}>
        <WellHeader hasEditButton />
        <WellTitle>
          <div className='flex-col-center gap-[4px]'>
            <div className='relative h-[28px] w-[28px]'>
              <Link
                href={session ? PAGES.SEARCH : PAGES.LANDING}
                className='absolute inset-x-0 top-[50%] z-50 mx-auto -translate-y-1/2 cursor-pointer'
              >
                {session ? (
                  <PlusIcon />
                ) : (
                  <ArrowIcon fill='#313239' width={28} height={28} />
                )}
              </Link>
              <Pointing />
            </div>

            <h3 className='mt-[2px] text-body-xl-bold'>
              {session ? '책 추가하기' : '로그인이 필요해요'}
            </h3>
            <span className='text-body-md text-gray-600'>현재 높이 0cm</span>
          </div>
        </WellTitle>
        <WellBookList />
      </MainLayout>
    </>
  );
}

export default WellPage;
