import TapHeader from '@/components/common/header/TapHeader';
import React from 'react';

function ReviewMemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TapHeader />
      {children}
    </>
  );
}

export default ReviewMemoLayout;
