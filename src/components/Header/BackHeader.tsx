import React from 'react';
import WithWebViewTheme from '@/components/HOC/WithWebViewTheme';
import BackButton from '../Button/BackButton';

/** 뒤로가기 헤더
 * - 흰색 배경의 sticky 헤더입니다.
 * - 댓글 페이지에서 활용됩니다.
 */
function BackHeader() {
  return (
    <WithWebViewTheme bgColor='white'>
      <header className='header-sticky duration-50 z-70 flex justify-between border-b-[0.5px] border-gray-400 bg-white p-[24px] transition-all'>
        <BackButton fill='#727484' />
      </header>
    </WithWebViewTheme>
  );
}

export default BackHeader;
