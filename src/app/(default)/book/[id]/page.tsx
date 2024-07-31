'use client';

import BookDetail from '@/components/Book/BookDetail/BookDetail';
import BookInfo from '@/components/Book/BookInfo';
import AddButton from '@/components/Button/AddButton';
import TitleHeader from '@/components/Header/TitleHeader';
import AddBookSheet from '@/components/PopUp/AddBookSheet';
import RatingSelector from '@/components/Rating/RatingSelector';
import MajorTagList from '@/components/Tag/MajorTagList';
import { useScroll } from '@/hooks/gesture/useScroll';
import { usePopUpActions } from '@/store/popUpStore';
import React from 'react';

interface Props {
  params: {
    id: string;
  };
}

function BookPage({ params: { id } }: Props) {
  useScroll({ categoryColor: undefined });
  const { changePopUpState } = usePopUpActions();
  const pros = ['easy', 'organized', 'tears', 'warm'];
  const cons = ['biased', 'no_evidence', 'background', 'issuing'];

  return (
    <>
      <TitleHeader type='default' theme='dark' title='도서 상세 페이지' />
      <BookInfo bookId={id} />
      <div className='flex w-full flex-col gap-[36px]'>
        <div className='flex w-full flex-col gap-[36px] px-page'>
          <RatingSelector type='default' rating={4.5} />
          <MajorTagList type='pros' tagData={pros} />
          <MajorTagList type='cons' tagData={cons} />
          <AddButton
            text='우물에 책 추가하기'
            categoryId='novel'
            onClick={() => changePopUpState('isOpenAlertSheet', true)}
          />
        </div>
        <BookDetail />
      </div>
      <AddBookSheet />
    </>
  );
}

export default BookPage;
