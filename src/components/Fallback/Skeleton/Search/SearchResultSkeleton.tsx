import React from 'react';
import BookListItemSkeleton from '../Book/BookListItemSkeleton';

function SearchResultSkeleton() {
  return (
    <>
      <BookListItemSkeleton />
      <BookListItemSkeleton />
      <BookListItemSkeleton />
      <BookListItemSkeleton />
      <BookListItemSkeleton />
      <BookListItemSkeleton />
    </>
  );
}

export default SearchResultSkeleton;
