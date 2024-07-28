import BookListItem from '@/components/Book/BookListItem';
import React from 'react';

function SearchResult() {
  return (
    <div className='flex h-fit w-full flex-1 flex-col gap-[36px] pb-[36px] pt-[24px]'>
      <BookListItem type={1} />
      <BookListItem type={2} />
      <BookListItem type={1} />
      <BookListItem type={2} />
      <BookListItem type={1} />
      <BookListItem type={2} />
    </div>
  );
}

export default SearchResult;
