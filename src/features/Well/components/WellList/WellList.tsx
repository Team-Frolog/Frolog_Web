'use client';

import React from 'react';
import { AnimatePresence } from 'framer-motion';
import usePopUpStore from '@/store/popUpStore';
import MessageToast from '@/components/PopUp/MessageToast';
import { wellList } from '@/data/dummy/well';
import WellAddButton from './WellAddButton';
import Well from '../WellItem/Well';
import StoreRegisterSheet from '../StoreRegisterSheet/StoreRegisterSheet';

function WellList() {
  const isOpenAlertSheet = usePopUpStore((state) => state.isOpenAlertSheet);

  return (
    <div className='relative flex w-full flex-col bg-gray-300 pb-[30px] text-gray-800'>
      <div className='grid grid-cols-2 gap-[24px] px-page py-[12px]'>
        <WellAddButton />
        {wellList.map((well) => (
          <Well key={well.id} wellData={well} />
        ))}
      </div>
      <MessageToast />
      <AnimatePresence>
        {isOpenAlertSheet && <StoreRegisterSheet />}
      </AnimatePresence>
    </div>
  );
}

export default WellList;
