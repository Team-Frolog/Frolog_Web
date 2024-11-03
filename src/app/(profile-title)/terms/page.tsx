import { TermsMenu } from '@/features/Profile';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '이용약관',
};

function TermsPage() {
  return (
    <div className='flex w-full flex-1 px-page pb-[30px] pt-[16px]'>
      <TermsMenu />
    </div>
  );
}

export default TermsPage;
