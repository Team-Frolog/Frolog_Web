'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { CATEGORY } from '@/constants/category';
import { getPath } from '@/utils/getPath';
import { GetWellRes } from '@frolog/frolog-api';
import { FROGS } from '@/constants/frogs';
import NewTag from '@/components/Tag/NewTag';
import { sizeOfBg } from '../../../data/wellSize';
import WellOutline from './WellOutline';
import WellShape from './WellShape';
import { getIsNew } from '../../../utils/getIsNew';

interface Props {
  /** 사용 타입 (리스트 or 선택 시트) */
  type?: 'list' | 'select';
  /** 우물 정보 데이터 객체 */
  wellData: GetWellRes;
  /** 클릭 핸들러 */
  onClick?: () => void;
}

/** 우물 아이콘 컴포넌트 */
function WellIcon({ wellData, type = 'list', onClick }: Props) {
  const { id, name, frog, owner, color, shape, date } = wellData;
  const { navigate } = useCustomRouter('WELL');
  const controls = useAnimation();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const shapeRef = useRef<HTMLDivElement | null>(null);

  /** 우물 접근 모션 실행 함수 */
  const handleIntoWell = (wellId: string) => {
    if (buttonRef.current && shapeRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();

      shapeRef.current.style.top = `${buttonRect.top}px`;
      shapeRef.current.style.left = `${buttonRect.left}px`;
      shapeRef.current.style.width = `${buttonRect.width}px`;
      shapeRef.current.style.height = `${buttonRect.height}px`;

      controls.start({
        scale: 18,
        transition: { duration: 1, ease: 'easeInOut' },
      });

      setTimeout(() => {
        navigate(getPath.wellDetail(owner, wellId));
      }, 1000);
    }
  };

  return (
    <div className='flex h-fit w-fit flex-col gap-[8px] place-self-center'>
      <motion.button
        ref={buttonRef}
        whileTap={{ scale: 0.95 }}
        type='button'
        onClick={type === 'list' ? () => handleIntoWell(id) : onClick}
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
          src={`/images/well/shape/${shape}.webp`}
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
          className='absolute inset-x-0 bottom-[15px] z-10 mx-auto h-[75%] w-auto'
        />
        <div className='absolute left-1/2 top-1/2 z-20 h-full w-full -translate-x-1/2 -translate-y-1/2 pt-[0px]'>
          <WellOutline welltype={shape} fill={CATEGORY[color].bg} />
        </div>
      </motion.button>
      <h5 className='break-all text-center text-body-lg-bold text-gray-800'>
        {name}
      </h5>
    </div>
  );
}

export default WellIcon;
