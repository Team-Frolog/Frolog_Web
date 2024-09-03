'use client';

import BookInfo from '@/components/Book/BookInfo';
import AddButton from '@/components/Button/AddButton';
import TitleHeader from '@/components/Header/TitleHeader';
import AddBookSheet from '@/components/PopUp/AddBookSheet';
import RatingSelector from '@/components/Rating/RatingSelector';
import MajorTagList from '@/components/Tag/MajorTagList';
import { BookDetail } from '@/features/Book';
import { useScroll } from '@/hooks/gesture/useScroll';
import { useBookDetail } from '@/features/Book/hooks/useBookDetail';
import { usePopUpActions } from '@/store/popUpStore';
import React from 'react';
import SelectBooksSheet from '@/components/PopUp/SelectBooksSheet';
import WellSelectSheet from '@/components/PopUp/WellSelectSheet';

interface Props {
  params: {
    id: string;
  };
}

function BookPage({ params: { id } }: Props) {
  const { bookData } = useBookDetail(id);
  useScroll({ categoryColor: undefined });
  const { changePopUpState } = usePopUpActions();

  return (
    <>
      <TitleHeader
        type='no_border'
        theme='dark'
        title='도서 상세 페이지'
        hasButton={false}
      />
      <BookInfo bookId={id} />
      <div className='flex w-full flex-col gap-[36px] bg-white'>
        <div className='flex w-full flex-col gap-[36px] px-page'>
          <RatingSelector type='default' rating={bookData?.avg_rating} />
          <AddButton
            text='우물에 책 추가하기'
            categoryId='novel'
            onClick={() => changePopUpState('isOpenAlertSheet', true)}
          />
          <MajorTagList type='pros' tagData={bookData?.tags_pos} />
          <MajorTagList type='cons' tagData={bookData?.tags_neg} />
        </div>
        <BookDetail bookId={id} />
      </div>
      <AddBookSheet />
      <SelectBooksSheet />
      <WellSelectSheet />
    </>
  );
}

export default BookPage;
