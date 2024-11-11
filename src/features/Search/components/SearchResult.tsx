'use client';

import React, { useState } from 'react';
import { BookListItem } from '@/features/Book';
import { useRouter } from 'next/navigation';
import { PAGES } from '@/constants/page';
import { AnimatePresence } from 'framer-motion';
import { bottomSheet } from '@/modules/BottomSheet';
import { useUserId } from '@/store/sessionStore';
import SearchResultSkeleton from '@/components/Fallback/Skeleton/SearchResultSkeleton';
import BookListItemSkeleton from '@/components/Fallback/Skeleton/BookListItemSkeleton';
import BookRegisterSheet from './RegisterSheet/BookRegisterSheet';
import { useSearch } from '../hooks/useSearch';
import SearchResultEmpty from './SearchResultEmpty';
import { useObserver } from '../../../hooks/gesture/useObserver';
import NoBookButton from './NoBookButton';

function SearchResult() {
  const {
    searchResult,
    isEmpty,
    isLoading,
    isSearched,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useSearch();
  const userId = useUserId();
  const router = useRouter();
  const [isOpenRegister, setIsOpenRegister] = useState(false);

  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  const handleNoBookClick = () => {
    if (userId) {
      setIsOpenRegister(true);
    } else {
      bottomSheet.open({
        sheetKey: 'need_to_login',
        onClick: () => router.push(PAGES.LANDING),
      });
    }
  };

  return (
    <div className='flex h-fit w-full flex-1 flex-col items-end gap-[36px] pb-[36px] pt-[24px]'>
      {isSearched && isEmpty && !isFetching && <SearchResultEmpty />}
      {!isEmpty && (
        <div className='flex w-full flex-1 flex-col gap-[36px]'>
          {searchResult.map((item) => (
            <BookListItem key={item.isbn} bookData={item} />
          ))}
        </div>
      )}

      {isSearched && <NoBookButton onClick={handleNoBookClick} />}
      {isLoading && <SearchResultSkeleton />}
      {isFetchingNextPage && (
        <>
          <BookListItemSkeleton />
          <BookListItemSkeleton />
          <BookListItemSkeleton />
          <BookListItemSkeleton />
          <BookListItemSkeleton />
          <BookListItemSkeleton />
        </>
      )}
      {!isFetchingNextPage && !isLoading && (
        <div ref={setTarget} id='observer' className='h-[10px]' />
      )}
      <AnimatePresence>
        {isOpenRegister && (
          <BookRegisterSheet onClose={() => setIsOpenRegister(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default SearchResult;
