'use client';

import BookInfo from '@/components/Book/BookInfo';
import AddButton from '@/components/Button/AddButton';
import TitleHeader from '@/components/Header/TitleHeader';
import RatingSelector from '@/components/Rating/RatingSelector';
import MajorTagList from '@/components/Tag/MajorTagList';
import { BookDetail } from '@/features/Book';
import { useScroll } from '@/hooks/gesture/useScroll';
import { useBookDetail } from '@/features/Book/hooks/useBookDetail';
import React from 'react';
import { bottomSheet } from '@/modules/BottomSheet';
import AddBookToWell from '@/features/Book/components/BottomSheet/AddBookToWell';
import MainLayout from '@/layouts/MainLayout';
import { runWhenLoggedIn } from '@/utils/runWhenLoggedIn';

interface Props {
  params: {
    id: string;
  };
}

function BookPage({ params: { id } }: Props) {
  const { bookData } = useBookDetail(id);
  useScroll({ categoryColor: undefined });

  return (
    <>
      <TitleHeader
        type='no_border'
        theme='dark'
        title='도서 상세 페이지'
        hasButton={false}
      />
      <MainLayout>
        <BookInfo bookId={id} />
        <div className='flex w-full flex-col gap-[36px] bg-white'>
          <div className='flex w-full flex-col gap-[36px] px-page'>
            <RatingSelector type='default' rating={bookData?.avg_rating} />
            <AddButton
              text='우물에 책 추가하기'
              categoryId='novel'
              onClick={() =>
                runWhenLoggedIn(() =>
                  bottomSheet.open({
                    sheetKey: 'add_book',
                    children: <AddBookToWell bookId={id} />,
                  })
                )
              }
            />
            <MajorTagList type='pros' tagData={bookData?.tags_pos} />
            <MajorTagList type='cons' tagData={bookData?.tags_neg} />
          </div>
          <BookDetail bookId={id} />
        </div>
      </MainLayout>
    </>
  );
}

export default BookPage;
