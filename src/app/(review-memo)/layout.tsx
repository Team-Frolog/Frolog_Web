import TapHeader from '@/components/common/header/TapHeader';
import React from 'react';

function ReviewMemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='default-h-w bg-white text-gray-800'>
      <TapHeader />
      {children}
    </div>
  );
}

export default ReviewMemoLayout;
