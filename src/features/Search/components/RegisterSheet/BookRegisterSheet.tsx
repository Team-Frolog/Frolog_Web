'use client';

import BackDrop from '@/layouts/BackDrop';
import Portal from '@/layouts/Portal';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useClickOutside } from '@/hooks/popup/useClickOutside';
import SheetHeader from 'public/images/frog/sheet/sheet-header.svg';
import RegisterForm from './RegisterForm';
import { useBookRegister } from '../../hooks/useBookRegister';

interface Props {
  onClose: () => void;
}

function BookRegisterSheet({ onClose }: Props) {
  const { isRegistered, handleRegister } = useBookRegister();
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, onClose);

  return (
    <>
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
