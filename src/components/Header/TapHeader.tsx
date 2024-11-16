'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import ResponsiveHeaderLayout from '@/layouts/ResponsiveHeaderLayout';
import Link from 'next/link';

function TapHeader() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <ResponsiveHeaderLayout display='block' onClick={() => router.back()}>
      <div className='relative w-fit pb-[5px]'>
        <div className='flex gap-[24px]'>
          <Link
            id={pathname.includes('memo') ? 'selected' : 'unselected'}
            type='button'
            replace
            href={`${pathname.replace(/review/, 'memo')}`}
            className='text-heading-md-bold'
            style={{
              color: pathname.includes('memo') ? '#FFFFFF' : '#b3b6c5',
            }}
          >
            메모
          </Link>
          <Link
            id={pathname.includes('review') ? 'selected' : 'unselected'}
            type='button'
            replace
            href={`${pathname.replace(/memo/, 'review')}`}
            className='text-heading-md-bold'
            style={{
              color: pathname.includes('review') ? '#FFFFFF' : '#b3b6c5',
            }}
          >
            리뷰
          </Link>
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
