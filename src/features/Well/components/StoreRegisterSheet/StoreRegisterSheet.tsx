'use client';

import BackDrop from '@/layouts/BackDrop';
import Portal from '@/layouts/Portal';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useClickOutside } from '@/hooks/popup/useClickOutside';
import { usePopUpActions } from '@/store/popUpStore';
import SheetHeader from 'public/images/frog/sheet/sheet-header.svg';
import AlertBottomSheet from '@/layouts/AlertBottomSheet';
import { sheetData } from '@/data/ui/bottomSheet';
import Button from '@/components/Button/Button';

function StoreRegisterSheet() {
  const { changePopUpState } = usePopUpActions();
  const [isRegistered, setIsRegistered] = useState<boolean | null>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, () => changePopUpState('isOpenAlertSheet', false));

  const handleRegister = () => {
    setIsRegistered(true);
  };

  return (
    <>
      {isRegistered && (
        <AlertBottomSheet sheetData={sheetData.done_store_register}>
          <p>{sheetData.done_store_register.description}</p>
        </AlertBottomSheet>
      )}

      {isRegistered === false && (
        <Portal>
          <BackDrop align='end'>
            <motion.div
              ref={ref}
              initial={{ y: '120%' }}
              animate={{ y: '0%' }}
              exit={{ y: '120%' }}
              transition={{ duration: 0.3 }}
              className='relative flex w-full flex-col'
            >
              <SheetHeader className='w-full' />
              <div className='relative flex h-fit w-full flex-col items-center gap-[20px] bg-gray-900 px-[24px] pb-[30px] text-white'>
                <div className='flex w-full flex-col items-center gap-[12px] text-center'>
                  <h2 className='text-heading-md-bold text-main_hightlight'>
                    더 귀여운 개구리를
                    <br />
                    원하나요?
                  </h2>
                  <p className='text-body-lg'>
                    다양한 개구리를 살 수 있는 상점을 준비중이에요.
                    <br />
                    상점이 오픈되면, 알려드릴게요! 🔔
                  </p>
                </div>
                <Button type='button' onClick={handleRegister}>
                  상점 오픈 알림 받기
                </Button>
              </div>
            </motion.div>
          </BackDrop>
        </Portal>
      )}
    </>
  );
}

export default StoreRegisterSheet;
