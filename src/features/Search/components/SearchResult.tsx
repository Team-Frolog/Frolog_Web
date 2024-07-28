'use client';

import React from 'react';
import BookListItem from '@/components/Book/BookListItem';
import Button from '@/components/Button/Button';
import AlertBottomSheet from '@/layouts/AlertBottomSheet';
import { useSession } from 'next-auth/react';
import usePopUpStore, { usePopUpActions } from '@/store/popUpStore';
import { sheetData } from '@/data/ui/bottomSheet';
import { useRouter } from 'next/navigation';
import { PAGES } from '@/constants/page';
import { AnimatePresence } from 'framer-motion';
import BookRegisterSheet from './RegisterSheet/BookRegisterSheet';
// import SearchResultEmpty from './SearchResultEmpty';

function SearchResult() {
  const router = useRouter();
  const { data: session } = useSession();
  const { isOpenLogin, isOpenAlert } = usePopUpStore((state) => ({
    isOpenLogin: state.isOpenLoginSheet,
    isOpenAlert: state.isOpenAlertSheet,
  }));
  const { changePopUpState } = usePopUpActions();

  const handleNoBookClick = () => {
    if (session) {
      changePopUpState('isOpenAlertSheet', true);
    } else {
      changePopUpState('isOpenLoginSheet', true);
    }
  };

  return (
    <div className='flex h-fit w-full flex-1 flex-col gap-[36px] pb-[36px] pt-[24px]'>
      <BookListItem type={1} />
      <BookListItem type={2} />
      <BookListItem type={1} />
      <BookListItem type={2} />
      <BookListItem type={1} />
      <BookListItem type={2} />
      {/* <SearchResultEmpty /> */}
      <Button type='button' theme='gray' onClick={handleNoBookClick}>
        앗! 찾는 책이 없나요?
      </Button>

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
