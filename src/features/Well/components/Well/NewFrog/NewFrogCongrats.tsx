import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import FrologItem from '@/components/FrologItem/FrologItem';
import { GetStoreItemRes } from '@frolog/frolog-api';

interface Props {
  acquiredFrog: GetStoreItemRes;
}

function NewFrogCongrats({ acquiredFrog }: Props) {
  const topConfettiVariants = {
    initial: { y: 0, opacity: 0, scale: 0.3 },
    animate: {
      y: -140,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12, delay: 0.1 },
    },
  };

  const bottomConfettiVariants = {
    initial: { y: 0, opacity: 0, scale: 0.3 },
    animate: {
      y: 140,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12, delay: 0.1 },
    },
  };

  return (
    <div className='relative flex w-full flex-col items-center justify-center'>
      <motion.div
        className='absolute top-0 z-0 flex w-full justify-center px-[20px]'
        initial='initial'
        animate='animate'
        variants={topConfettiVariants}
      >
        <Image
          src='/images/etc/confetti.svg'
          alt='상단 폭죽'
          width={300}
          height={150}
          style={{ transform: 'rotate(180deg)' }}
        />
      </motion.div>

      <div className='relative z-10'>
        <FrologItem type='well' item={acquiredFrog} />
      </div>

      <motion.div
        className='absolute bottom-0 z-0 flex w-full justify-center px-[20px]'
        initial='initial'
        animate='animate'
        variants={bottomConfettiVariants}
      >
        <Image
          src='/images/etc/confetti.svg'
          alt='하단 폭죽'
          width={300}
          height={150}
        />
      </motion.div>
    </div>
  );
}

export default NewFrogCongrats;
