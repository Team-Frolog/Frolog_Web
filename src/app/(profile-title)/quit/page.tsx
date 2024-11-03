import { QuitForm } from '@/features/Profile';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '회원탈퇴',
};

function QuitPage() {
  return (
    <div className='flex w-full flex-1 px-page pb-[30px] pt-[16px]'>
      <QuitForm />
    </div>
  );
}

export default QuitPage;
