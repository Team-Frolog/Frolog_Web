'use client';

import React from 'react';
import { AnimatePresence } from 'framer-motion';
import usePopUpStore from '@/store/popUpStore';
import WellItemsSkeleton from '@/components/Fallback/Skeleton/WellItemsSkeleton';
import { useObserver } from '@/hooks/gesture/useObserver';
import MessageToast from '@/components/PopUp/MessageToast';
import WellAddButton from './WellAddButton';
import Well from '../WellItem/Well';
import StoreRegisterSheet from '../StoreRegisterSheet/StoreRegisterSheet';
import { useWells } from '../../hooks/useWells';

interface Props {
  userId: string;
  isRootUser: boolean;
}

function WellList({ userId, isRootUser }: Props) {
  const { wells, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useWells(userId);
  const isOpenAlertSheet = usePopUpStore((state) => state.isOpenAlertSheet);
  const { setTarget } = useObserver({ hasNextPage, fetchNextPage });

  return (
    <div className='relative flex w-full flex-col bg-gray-300 pb-[36px] text-gray-800'>
      <div className='grid grid-cols-2 gap-[24px] px-page py-[12px]'>
        {isRootUser && <WellAddButton />}
        {wells?.map((well) => <Well key={well.id} wellData={well} />)}
        {isFetchingNextPage && <WellItemsSkeleton />}
        {!isFetchingNextPage && (
          <div ref={setTarget} id='observer' className='h-[10px]' />
        )}
      </div>
      {isRootUser && <MessageToast />}
      {isRootUser && (
        <AnimatePresence>
          {isOpenAlertSheet && <StoreRegisterSheet />}
        </AnimatePresence>
      )}
    </div>
  );
}

export default WellList;
