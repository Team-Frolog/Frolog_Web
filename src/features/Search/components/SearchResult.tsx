'use client';

import React from 'react';
import Button from '@/components/Button/Button';
import AlertBottomSheet from '@/layouts/AlertBottomSheet';
import { BookListItem } from '@/features/Book';
import { useSession } from 'next-auth/react';
import usePopUpStore, { usePopUpActions } from '@/store/popUpStore';
import { sheetData } from '@/data/ui/bottomSheet';
import { useRouter } from 'next/navigation';
import { PAGES } from '@/constants/page';
import { AnimatePresence } from 'framer-motion';
import BookRegisterSheet from './RegisterSheet/BookRegisterSheet';
import { useSearch } from '../hooks/useSearch';
import SearchResultEmpty from './SearchResultEmpty';
import { useObserver } from '../hooks/useObserver';

function SearchResult() {
  const {
    searchResult,
    isEmpty,
    isSearched,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useSearch();
  const router = useRouter();
  const { data: session } = useSession();
  const { isOpenLogin, isOpenAlert } = usePopUpStore((state) => ({
    isOpenLogin: state.isOpenLoginSheet,
    isOpenAlert: state.isOpenAlertSheet,
  }));
  const { changePopUpState } = usePopUpActions();
  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  const handleNoBookClick = () => {
    changePopUpState(session ? 'isOpenAlertSheet' : 'isOpenLoginSheet', true);
  };

  return (
    <div className='flex h-fit w-full flex-1 flex-col gap-[36px] pb-[36px] pt-[24px]'>
      {isSearched && isEmpty && !isFetching && <SearchResultEmpty />}
      <div className='flex w-full flex-1 flex-col gap-[36px]'>
        {!isEmpty &&
          searchResult.map((item) => (
            <BookListItem key={item.isbn} bookData={item} />
          ))}
      </div>
      {isSearched && (
        <Button type='button' theme='gray' onClick={handleNoBookClick}>
          앗! 찾는 책이 없나요?
        </Button>
      )}
      <div ref={setTarget} id='observer' className='h-[10px]' />
      <AnimatePresence>
        {isOpenLogin && (
          <AlertBottomSheet
            sheetData={sheetData.need_to_login}
            onClick={() => router.push(PAGES.LOGIN)}
          >
            <p>{sheetData.need_to_login.description}</p>
          </AlertBottomSheet>
        )}
      </AnimatePresence>
      <AnimatePresence>{isOpenAlert && <BookRegisterSheet />}</AnimatePresence>
    </div>
  );
}

export default SearchResult;
