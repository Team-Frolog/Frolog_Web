import Image from 'next/image';
import React, { useRef } from 'react';
import { SHEET_FROG } from '@/constants/frogs';
import { motion } from 'framer-motion';
import Button from '@/components/Button/Button';
import FrogList from './FrogList';
import { useClickOutside } from '@/hooks/popup/useClickOutside';
import { useRouter } from 'next/navigation';
import { PAGES } from '@/constants/page';
import { STORAGE_KEY } from '@/constants/storage';

interface Props {
  ownedFrog: string;
  onClose: () => void;
}

function GuideSheet({ ownedFrog, onClose }: Props) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, onClose);

  return (
    <motion.div
      ref={ref}
      initial={{ y: '120%' }}
      animate={{ y: '0%' }}
      exit={{ y: '120%' }}
      transition={{ duration: 0.3 }}
      className='safe-bottom relative flex h-fit w-full flex-col items-center gap-[40px] rounded-t-[20px] bg-white px-[24px] pb-[20px] pt-[40px] text-gray-800'
      style={{ paddingTop: '40px', gap: '30px' }}
    >
      <Image
        src={SHEET_FROG.normal}
        alt='frog'
        width={191}
        height={70}
        className='absolute inset-x-0 mx-auto'
        style={{ top: '-55px' }}
      />
      <div className='flex-col-center w-full gap-[30px]'>
        <h2 className='text-center text-title-xl-bold'>
          책을 1권 더 추가하고,
          <br />세 개구리 모두 얻으세요!
        </h2>

        <FrogList ownedFrog={ownedFrog} />
      </div>
      <div className='flex-col-center w-full gap-[20px] pb-[20px]'>
        <Button
          type='button'
          theme='normal'
          onClick={() => {
            onClose();
            localStorage.removeItem(STORAGE_KEY.gotFirstFrog);
            router.push(PAGES.SEARCH);
          }}
        >
          책 추가하기
        </Button>
      </div>
    </motion.div>
  );
}

export default GuideSheet;
