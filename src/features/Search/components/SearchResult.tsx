'use client';

import React from 'react';
import AlertBottomSheet from '@/layouts/AlertBottomSheet';
import { BookListItem } from '@/features/Book';
import usePopUpStore from '@/store/popUpStore';
import { sheetData } from '@/data/ui/bottomSheet';
import { LOGIN_CALLBACK } from '@/constants/storage';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { PAGES } from '@/constants/page';
import { AnimatePresence } from 'framer-motion';
import BookRegisterSheet from './RegisterSheet/BookRegisterSheet';
import { useSearch } from '../hooks/useSearch';
import SearchResultEmpty from './SearchResultEmpty';
import { useObserver } from '../hooks/useObserver';
import NoBookButton from './NoBookButton';

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
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { isOpenLogin, isOpenAlert } = usePopUpStore((state) => ({
    isOpenLogin: state.isOpenLoginSheet,
    isOpenAlert: state.isOpenAlertSheet,
  }));

  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  const handleClickLogin = () => {
    const callbackUrl = `${pathname}?${searchParams}`;
    sessionStorage.setItem(LOGIN_CALLBACK, callbackUrl);
    router.push(PAGES.LANDING);
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

      {isSearched && <NoBookButton />}
      <div ref={setTarget} id='observer' className='h-[10px]' />
      <AnimatePresence>
        {isOpenLogin && (
          <AlertBottomSheet
            sheetData={sheetData.need_to_login}
            onClick={handleClickLogin}
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
