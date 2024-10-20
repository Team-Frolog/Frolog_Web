'use client';

import React from 'react';
import { BookListItem } from '@/features/Book';
import usePopUpStore from '@/store/popUpStore';
import { useRouter } from 'next/navigation';
import { PAGES } from '@/constants/page';
import { AnimatePresence } from 'framer-motion';
import { bottomSheet } from '@/modules/BottomSheet';
import { useSession } from 'next-auth/react';
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
    isSearched,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useSearch();
  const { data: session } = useSession();
  const router = useRouter();

  const { isOpenAlert, changePopUpState } = usePopUpStore((state) => ({
    isOpenAlert: state.isOpenAlertSheet,
    changePopUpState: state.actions.changePopUpState,
  }));

  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  const handleNoBookClick = () => {
    if (session) {
      changePopUpState('isOpenAlertSheet', true);
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
      {isFetchingNextPage && (
        <>
          <BookListItemSkeleton />
          <BookListItemSkeleton />
          <BookListItemSkeleton />
        </>
      )}
      {!isFetchingNextPage && (
        <div ref={setTarget} id='observer' className='h-[10px]' />
      )}
      <AnimatePresence>{isOpenAlert && <BookRegisterSheet />}</AnimatePresence>
    </div>
  );
}

export default SearchResult;
