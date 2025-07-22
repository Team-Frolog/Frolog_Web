import Image from 'next/image';
import React from 'react';
import { SHEET_FROG } from '@/constants/frogs';
import { motion } from 'framer-motion';
import FrogList from './FrogList';

interface Props {
  onAcquire: (key: string) => void;
}

function FrogSelectSheet({ onAcquire }: Props) {
  return (
    <motion.div
      initial={{ y: '120%' }}
      animate={{ y: '0%' }}
      exit={{ y: '120%' }}
      transition={{ duration: 0.3 }}
      className='safe-bottom relative flex h-fit w-full flex-col items-center gap-[40px] rounded-t-[20px] bg-white px-[24px] pb-[20px] pt-[40px] text-gray-800'
      style={{ paddingTop: '40px', gap: '40px' }}
    >
      <Image
        src={SHEET_FROG.normal}
        alt='frog'
        width={191}
        height={70}
        className='absolute inset-x-0 mx-auto'
        style={{ top: '-55px' }}
      />
      <div className='flex-col-center w-full gap-[12px]'>
        <h2 className='text-center text-title-xl-bold'>
          책 1권 추가 완료!
          <br />
          보상으로 개구리를 골라주세요
        </h2>

        <FrogList onAcquire={onAcquire} />
      </div>
    </motion.div>
  );
}

export default FrogSelectSheet;
