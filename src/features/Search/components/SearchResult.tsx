'use client';

import React, { useState } from 'react';
import { BookListItem } from '@/features/Book';
import { useRouter } from 'next/navigation';
import { PAGES } from '@/constants/page';
import { AnimatePresence } from 'framer-motion';
import { bottomSheet } from '@/modules/BottomSheet';
import MainLayout from '@/layouts/MainLayout';
import { useUserId } from '@/store/sessionStore';
import { useScrollPosition } from '@/hooks/gesture/useScrollPosition';
import SearchResultSkeleton from '@/components/Fallback/Skeleton/SearchResultSkeleton';
import BookRegisterSheet from './RegisterSheet/BookRegisterSheet';
import { useSearchBook } from '../hooks/useSearchBook';
import SearchResultEmpty from './SearchResultEmpty';
import { useObserver } from '../../../hooks/gesture/useObserver';
import NoBookButton from './NoBookButton';

/** 검색 결과 리스트 */
function SearchResult() {
  const {
    searchResult,
    isEmpty,
    mainRef,
    isLoading,
    isSearched,
    isFetched,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useSearchBook();
  const userId = useUserId();
  const router = useRouter();
  const [isOpenRegister, setIsOpenRegister] = useState(false);

  const { saveScroll } = useScrollPosition({
    condition: isFetched,
    key: 'search',
  });

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
        onClick: () => router.push(PAGES.ONBOARDING),
      });
    }
  };

  return (
    <MainLayout
      ref={mainRef}
      isCenter={false}
      extraClass='px-[24px] h-fit bg-white pb-[36px] pt-[24px] items-end gap-[36px] bg-white'
    >
      {isSearched && isEmpty && isFetched && <SearchResultEmpty />}
      {!isEmpty && (
        <>
          {searchResult.map((item) => (
            <BookListItem
              key={item.isbn}
              onSaveScroll={() => saveScroll()}
              bookData={item}
            />
          ))}
        </>
      )}

      {isSearched && <NoBookButton onClick={handleNoBookClick} />}
      {isFetchingNextPage || isLoading ? (
        <SearchResultSkeleton />
      ) : (
        <div ref={setTarget} id='observer' className='h-[10px]' />
      )}

      <AnimatePresence>
        {isOpenRegister && (
          <BookRegisterSheet onClose={() => setIsOpenRegister(false)} />
        )}
      </AnimatePresence>
    </MainLayout>
  );
}

export default SearchResult;
