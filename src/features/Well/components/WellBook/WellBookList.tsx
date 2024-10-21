'use client';

import React from 'react';
import { staggerContainerVariants } from '@/styles/variants/variants';
import { motion } from 'framer-motion';
import { GetWellRes } from '@frolog/frolog-api';
// import ScrollToTop from '@/components/Button/ScrollToTop';
import WellBook from './WellBook';
import FrogOnBook from '../Well/FrogOnBook';
import { useWellItems } from '../../hooks/useWellItems';
import WellTitle from '../Well/WellTitle';
import WellActionButton from '../Well/Pointing/WellActionButton';

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
        {wellItems?.map((item) => (
          <WellBook key={item.id} userId={userId} wellBook={item} />
        ))}
        <FrogOnBook frogId={wellData.frog} isRootUser={isRootUser} />
        {/* <ScrollToTop /> */}
        {isDefaultWell && wellItems.length === 2 && (
          <WellActionButton
            btnName='새로운 우물 파기'
            href={`/${userId}/well/create`}
          />
        )}
      </motion.div>
    </>
  );
}

export default WellBookList;
