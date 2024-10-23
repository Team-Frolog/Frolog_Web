import { PAGES } from '@/constants/page';
import {
  WellActionButton,
  WellHeader,
  WellTitle,
  FrogOnBook,
} from '@/features/Well';
import MainLayout from '@/layouts/MainLayout';
import { MemoBookmarkIcon } from 'public/icons';
import React from 'react';

function DefaultWellPage() {
  return (
    <>
      <MainLayout extraClass='bg-shape-1 bg-gray-300 justify-between'>
        <WellHeader hasBackButton={false} />
        <WellTitle title='소중한 나의 첫 우물' />
        <WellActionButton
          btnName='로그인이 필요해요'
          type='arrow'
          isPointing
          href={PAGES.LANDING}
          wellHeight={5}
        />
        <div className='flex w-full flex-col-reverse items-center'>
          <div
            className='flex w-[80%] items-center justify-center'
            style={{ margin: '0px 0px 0px 30px' }}
          >
            <div className='read-book bg-category-bg-novel'>
              <div className='read-book-band bg-category-band-novel' />
              <span className='read-book-text'>다 읽은 책은 이렇게 쌓여요</span>
            </div>
            <MemoBookmarkIcon />
          </div>
          <div
            className='flex w-[80%] items-center'
            style={{ margin: '0px 30px 0px 0px' }}
          >
            <div className='reading-book border-category-bg-it'>
              <span className='reading-book-text'>
                읽는 중인 책은 이렇게 쌓여요
              </span>
            </div>
            <MemoBookmarkIcon />
          </div>

          <FrogOnBook />
        </div>
      </MainLayout>
    </>
  );
}

export default DefaultWellPage;
