'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { PAGES } from '@/constants/page';
import ResponsiveHeaderLayout from '@/layouts/ResponsiveHeaderLayout';

function TapHeader({ bookId }: { bookId: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (route: 'back' | 'memo' | 'review') => {
    if (route === 'back') {
      router.back();
    } else {
      router.replace(`${PAGES.WELL_BOOK}/${bookId}/${route}`);
    }
  };

  return (
    <ResponsiveHeaderLayout onClick={() => handleClick('back')}>
      <div className='relative w-fit pb-[5px]'>
        <div className='flex gap-[24px]'>
          <button
            id={pathname.includes('memo') ? 'selected' : 'unselected'}
            type='button'
            onClick={() => handleClick('memo')}
            className='text-h_md_bold'
            style={{
              color: pathname.includes('memo') ? '#FFFFFF' : '#b3b6c5',
            }}
          >
            메모
          </button>
          <button
            id={pathname.includes('review') ? 'selected' : 'unselected'}
            type='button'
            onClick={() => handleClick('review')}
            className='text-h_md_bold'
            style={{
              color: pathname.includes('review') ? '#FFFFFF' : '#b3b6c5',
            }}
          >
            리뷰
          </button>
        </div>
        <div
          id='bar'
          className={`absolute bottom-0 h-[3px] w-[60px] bg-white transition-all ${pathname.includes('review') ? 'left-[84px]' : 'left-0'}`}
        />
      </div>
    </ResponsiveHeaderLayout>
  );
}

export default TapHeader;
