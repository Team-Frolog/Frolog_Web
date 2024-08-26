'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Outline from 'public/images/well/outline/1.svg';
import Shape from 'public/images/well/shape/2.svg';
import { useRouter } from 'next/navigation';
import { Well as WellDataType } from '@/data/dummy/well';
import { CATEGORY } from '@/constants/category';
import NewTag from '../NewTag';

interface Props {
  wellData: WellDataType;
}

function Well({ wellData }: Props) {
  const router = useRouter();
  const controls = useAnimation();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const shapeRef = useRef<HTMLDivElement | null>(null);

  const handleIntoWell = () => {
    if (buttonRef.current && shapeRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();

      shapeRef.current.style.top = `${buttonRect.top}px`;
      shapeRef.current.style.left = `${buttonRect.left}px`;
      shapeRef.current.style.width = `${buttonRect.width}px`;
      shapeRef.current.style.height = `${buttonRect.height}px`;

      controls.start({
        scale: 15,
        transition: { duration: 1.5, ease: 'easeInOut' },
      });

      setTimeout(() => {
        router.push('/');
      }, 1500);
    }
  };

  return (
    <div className='flex h-fit w-fit flex-col gap-[8px] place-self-center'>
      <button
        ref={buttonRef}
        type='button'
        onClick={handleIntoWell}
        className='flex-center relative box-content h-[120px] w-[120px] bg-gray-900 p-[20px]'
      >
        <motion.div
          ref={shapeRef}
          initial={{ scale: 0 }}
          animate={controls}
          className='z-100 fixed'
        >
          <Shape className='h-full w-full object-cover' />
        </motion.div>
        <NewTag position='left-0 top-0 z-50' />
        <Image
          src='/images/frog/frog-sitting.svg'
          alt='frog'
          width={80}
          height={110}
          className='absolute inset-x-0 bottom-[18px] z-10 mx-auto h-[60%] w-auto'
        />
        <div className='absolute left-1/2 top-1/2 z-20 h-full w-full -translate-x-1/2 -translate-y-1/2 pt-[0px]'>
          <Outline fill={CATEGORY[wellData.category].bg} />
        </div>
      </button>
      <h5 className='text-center text-body_lg_bold text-gray-800'>
        {wellData.title}
      </h5>
    </div>
  );
}

export default Well;
