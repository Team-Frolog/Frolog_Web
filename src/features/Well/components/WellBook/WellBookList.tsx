'use client';

import React from 'react';
import { staggerContainerVariants } from '@/styles/variants/variants';
import { motion } from 'framer-motion';
import { GetWellRes } from '@frolog/frolog-api';
import WellBook from './WellBook';
import FrogOnBook from '../Well/FrogOnBook';
import { useWellItems } from '../../hooks/useWellItems';
import WellTitle from '../Well/WellTitle';
import WellActionButton from '../Well/Pointing/WellActionButton';
import { chat } from '../../data/chat';

interface Props {
  userId?: string;
  wellData: GetWellRes;
  isRootUser: boolean;
  isDefaultWell: boolean | undefined;
}

function WellBookList({ userId, wellData, isRootUser, isDefaultWell }: Props) {
  const { wellItems } = useWellItems(wellData.id);
  const { id, name, height } = wellData;

  if (!wellItems) return <></>;

  const getMessage = (count: number) => {
    if (isDefaultWell) {
      if (count === 1) {
        return chat.first_book;
      } else if (count === 2) {
        return chat.second_book;
      }
    } else {
      if (count === 0) {
        return chat.empty;
      }
    }
    return undefined;
  };

  return (
    <>
      <WellTitle
        title={name}
        wellId={id}
        wellHeight={height}
        isRootUser={isRootUser}
        isPointing={isDefaultWell && wellItems.length < 2}
      />
      <motion.div
        className='flex h-fit w-full flex-1 flex-col-reverse items-center'
        initial='hidden'
        animate='visible'
        variants={staggerContainerVariants}
      >
        <div className='h-[12px] w-full shrink-0 rounded-t-[20px] bg-gray-900' />
        {wellItems.map((item) => (
          <WellBook key={item.id} userId={userId} wellBook={item} />
        ))}
        <FrogOnBook
          frogId={wellData.frog}
          message={isDefaultWell ? getMessage(wellItems.length) : undefined}
        />
        {isDefaultWell && wellItems.length === 2 && (
          <WellActionButton
            btnName='새로운 우물 파기'
            href={`/${userId}/well/create?isSecond=true`}
            isPointing
          />
        )}
      </motion.div>
    </>
  );
}

export default WellBookList;
