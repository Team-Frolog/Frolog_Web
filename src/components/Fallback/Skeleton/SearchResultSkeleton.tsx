import React from 'react';
import BookListItemSkeleton from './BookListItemSkeleton';

function SearchResultSkeleton() {
  return (
    <div className='flex w-full flex-1 flex-col gap-[36px] bg-white'>
      <BookListItemSkeleton />
      <BookListItemSkeleton />
      <BookListItemSkeleton />
      <BookListItemSkeleton />
      <BookListItemSkeleton />
      <BookListItemSkeleton />
    </div>
  );
}

export default SearchResultSkeleton;
