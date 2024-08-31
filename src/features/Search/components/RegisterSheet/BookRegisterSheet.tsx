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
import RegisterForm, { RegisterFormType } from './RegisterForm';
import { requestBook } from '../../api/register.api';

function BookRegisterSheet() {
  const { changePopUpState } = usePopUpActions();
  const [isRegistered, setIsRegistered] = useState<boolean | null>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, () => changePopUpState('isOpenAlertSheet', false));

  const handleRegister = (data: RegisterFormType) => {
    requestBook(data).then((res) => {
      if (res?.result) {
        setIsRegistered(null);
        setTimeout(() => {
          setIsRegistered(true);
        }, 500);
      } else {
        window.alert('다시 시도해주세요.');
      }
    });
  };

  return (
    <>
      {isRegistered && (
        <AlertBottomSheet sheetData={sheetData.done_register}>
          <p>{sheetData.done_register.description}</p>
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
                    새로운 책을
                    <br />
                    등록해볼까요?
                  </h2>
                  <p className='text-body-lg'>
                    아래 책 정보를 남기시면
                    <br />
                    추후에 책이 추가될 때, 알려드릴게요! 🔔
                  </p>
                </div>
                <RegisterForm onSubmit={handleRegister} />
              </div>
            </motion.div>
          </BackDrop>
        </Portal>
      )}
    </>
  );
}

export default BookRegisterSheet;
