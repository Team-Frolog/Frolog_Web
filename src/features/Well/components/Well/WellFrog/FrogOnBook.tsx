'use client';

import React from 'react';
import Image from 'next/image';
import { FROGS } from '@/constants/frogs';
import { motion } from 'framer-motion';
import { useUserId } from '@/store/sessionStore';
import CustomMotionLink from '@/components/Link/CustomMotionLink';
import { IMAGES } from '@/constants/images';
import useNewItemStore from '@/store/newItemStore';
import { leafVariants, frogVariants } from '@/styles/variants/variants';
import { PAGES } from '@/constants/page';
import GuideChat from './GuideChat';
import Pointing from '../Pointing/Pointing';
import { STORAGE_KEY } from '@/constants/storage';

const MotionImage = motion.create(Image);

interface Props {
  /** 개구리 id */
  frogId?: string;
  /** 말풍선 메세지 */
  message?: string;
  /** 개구리 z-index */
  zIndex: number;
  /** 우물 순서 변경 모드 여부 */
  isMovable?: boolean;
}

/** 우물 내 도서 최상단에 있는 개구리 컴포넌트 */
function FrogOnBook({
  message,
  frogId = 'default',
  zIndex,
  isMovable = false,
}: Props) {
  const newItemId = useNewItemStore((state) => state.newItemId);
  const userId = useUserId();
  const isGotFirstFrog = localStorage.getItem(STORAGE_KEY.gotFirstFrog);

  return (
    <div className='relative z-20'>
      <MotionImage
        variants={newItemId ? leafVariants : undefined}
        style={{ zIndex }}
        className={`absolute inset-x-0 bottom-[-8px] mx-auto h-[24px] w-[190px] ${isMovable ? 'opacity-50' : ''}`}
        src={IMAGES.well.leaf}
        alt='leaf'
        width={190}
        height={24}
      />
      <motion.div
        style={{ zIndex: zIndex + 1 }}
        variants={newItemId ? frogVariants : undefined}
        className='flex-col-center relative pt-[20px]'
      >
        <GuideChat
          message={message}
          marginBottom={FROGS[frogId].marginBottom}
        />
        <div className='relative'>
          <motion.div whileTap={{ scale: 0.95 }}>
            <CustomMotionLink
              href={PAGES.STORE}
              className={userId ? '' : 'pointer-events-none'}
              onClick={() => localStorage.removeItem(STORAGE_KEY.gotFirstFrog)}
            >
              <Image
                src={FROGS[frogId].src}
                alt='frog'
                width={150}
                height={150}
              />
            </CustomMotionLink>
          </motion.div>
          {isGotFirstFrog && (
            <div className='pointer-events-none absolute inset-0'>
              <Pointing />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default FrogOnBook;
