import BookInfo from '@/components/Book/BookInfo';
import TapHeader from '@/components/Header/TapHeader';
import React from 'react';

interface Props {
  children: React.ReactNode;
  params: {
    id: string;
  };
}

function ReviewMemoLayout({ children, params }: Props) {
  return (
    <>
      <TapHeader bookId={params.id} />
      <BookInfo bookId={params.id} />
      <div className='flex-child-layout tooltip-after relative flex-1 gap-[12px] rounded-t-[20px] bg-green-200 py-[20px] after:-top-[10px] after:border-[16px] after:border-green-200'>
        {children}
      </div>
    </>
  );
}

export default ReviewMemoLayout;
