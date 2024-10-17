'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { CATEGORY } from '@/constants/category';
import { GetWellRes } from '@frolog/frolog-api';
import { FROGS } from '@/constants/frogs';
import NewTag from '../NewTag';
import { sizeOfBg } from '../../data/wellSize';
import WellOutline from './WellOutline';
import WellShape from './WellShape';
import { getIsNew } from '../../utils/getIsNew';

interface Props {
  type?: 'default' | 'select';
  wellData: GetWellRes;
  onClick?: () => void;
}

function Well({ wellData, type = 'default', onClick }: Props) {
  const { id, name, frog, owner, color, shape, date } = wellData;
  const router = useRouter();
  const controls = useAnimation();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const shapeRef = useRef<HTMLDivElement | null>(null);

  const handleIntoWell = (wellId: string) => {
    if (buttonRef.current && shapeRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();

      shapeRef.current.style.top = `${buttonRect.top}px`;
      shapeRef.current.style.left = `${buttonRect.left}px`;
      shapeRef.current.style.width = `${buttonRect.width}px`;
      shapeRef.current.style.height = `${buttonRect.height}px`;

      controls.start({
        scale: 18,
        transition: { duration: 1.2, ease: 'easeInOut' },
      });

      setTimeout(() => {
        router.push(`/${owner}/well/${wellId}`);
      }, 1500);
    }
  };

  return (
    <div className='flex h-fit w-fit flex-col gap-[8px] place-self-center'>
      <button
        ref={buttonRef}
        type='button'
        onClick={type === 'default' ? () => handleIntoWell(id) : onClick}
        className='flex-center relative box-content h-[120px] w-[120px] rounded-[50%] p-[20px]'
      >
        <motion.div
          ref={shapeRef}
          initial={{ scale: 0 }}
          animate={controls}
          className='fixed z-100'
        >
          <WellShape welltype={shape} />
        </motion.div>
        {getIsNew(date) && <NewTag position='left-0 top-0 z-50' />}
        <Image
          src={`/images/well/shape/${shape}.svg`}
          alt='shape'
          width={sizeOfBg[shape].width}
          height={sizeOfBg[shape].height}
          loading='eager'
          className='absolute inset-x-0 top-1/2 z-0 mx-auto -translate-y-1/2'
        />
        <Image
          src={FROGS[frog].src}
          alt='frog'
          width={80}
          height={110}
          loading='eager'
          className='absolute inset-x-0 bottom-[15px] z-10 mx-auto h-[60%] w-auto'
        />
        <div className='absolute left-1/2 top-1/2 z-20 h-full w-full -translate-x-1/2 -translate-y-1/2 pt-[0px]'>
          <WellOutline welltype={shape} fill={CATEGORY[color].bg} />
        </div>
      </button>
      <h5 className='break-all text-center text-body-lg-bold text-gray-800'>
        {name}
      </h5>
    </div>
  );
}

export default Well;
