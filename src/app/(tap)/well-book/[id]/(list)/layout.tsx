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
      <div className='flex-child-layout tooltip-after bg-category-bg-etc after:border-category-bg-etc relative flex-1 gap-[12px] rounded-t-[20px] py-[20px] after:-top-[10px] after:border-[16px]'>
        {children}
      </div>
    </>
  );
}

export default ReviewMemoLayout;
