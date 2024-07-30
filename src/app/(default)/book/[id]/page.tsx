'use client';

import BookDetail from '@/components/Book/BookDetail/BookDetail';
import BookInfo from '@/components/Book/BookInfo';
import AddButton from '@/components/Button/AddButton';
import TitleHeader from '@/components/Header/TitleHeader';
import RatingSelector from '@/components/Rating/RatingSelector';
import MajorTagList from '@/components/Tag/MajorTagList';
import React from 'react';

interface Props {
  params: {
    id: string;
  };
}

function BookPage({ params: { id } }: Props) {
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
            onClick={() => {}}
          />
        </div>
        <BookDetail />
      </div>
    </>
  );
}

export default BookPage;