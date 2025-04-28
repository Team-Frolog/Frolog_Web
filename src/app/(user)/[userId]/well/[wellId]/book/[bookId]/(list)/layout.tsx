import MainLayout from '@/layouts/MainLayout';
import BookInfo from '@/components/Book/BookInfo';
import React, { Suspense } from 'react';
import BookInfoSkeleton from '@/components/Fallback/Skeleton/Book/BookInfoSkeleton';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import { getBookInfo } from '@/features/Book/api/book.server.api';
import ReviewMemoHeader from '@/components/Header/ReviewMemoHeader';

interface Props {
  children: React.ReactNode;
  params: {
    userId: string;
    wellId: string;
    bookId: string;
  };
}

async function ReviewMemoLayout({
  children,
  params: { userId, wellId, bookId },
}: Props) {
  const bookData = await getBookInfo(bookId);
  const category = bookData?.category || 'novel';

  return (
    <>
      <ReviewMemoHeader
        userId={userId}
        wellId={wellId}
        bookId={bookId}
        category={category}
      />
      <MainLayout extraClass='bg-gray-900'>
        <Suspense fallback={<BookInfoSkeleton />}>
          <BookInfo bookId={bookId} canClick />
        </Suspense>

        <div className='flex w-full flex-1 flex-col bg-white'>
          <div
            className={`flex-child-layout tooltip-after bg-category-bg-${category} relative flex-1 rounded-t-[20px] pt-[24px]`}
          >
            <div
              className={`absolute left-1/2 top-[-10px] h-0 w-0 -translate-x-1/2 rotate-45 transform border-[16px] border-solid border-category-bg-${category} z-0`}
            />
            {children}
          </div>
        </div>
      </MainLayout>
      <NavigationBar />
    </>
  );
}

export default ReviewMemoLayout;
