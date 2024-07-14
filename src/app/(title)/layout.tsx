import TitleHeader from '@/components/common/header/TitleHeader';
import React from 'react';

function TitleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TitleHeader />
      <div className='h-fit w-full flex-1 bg-white px-[24px] py-[36px]'>
        {children}
      </div>
    </>
  );
}

export default TitleLayout;
