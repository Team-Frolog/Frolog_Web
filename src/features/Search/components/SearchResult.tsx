import BookListItem from '@/components/Book/BookListItem';
import Button from '@/components/Button/Button';
import React from 'react';
// import SearchResultEmpty from './SearchResultEmpty';

function SearchResult() {
  return (
    <div className='flex h-fit w-full flex-1 flex-col gap-[36px] pb-[36px] pt-[24px]'>
      <BookListItem type={1} />
      <BookListItem type={2} />
      <BookListItem type={1} />
      <BookListItem type={2} />
      <BookListItem type={1} />
      <BookListItem type={2} />
      {/* <SearchResultEmpty /> */}
      <Button type='button' theme='gray'>
        앗! 찾는 책이 없나요?
      </Button>
    </div>
  );
}

export default SearchResult;
