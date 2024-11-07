'use client';

import { FROGS, FROGS_SILHOUETTE } from '@/constants/frogs';
import NewTag from '@/components/Tag/NewTag';
import { getIsNew } from '@/features/Well/utils/getIsNew';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { GetStoreItemRes } from '@frolog/frolog-api';

interface Props {
  item: GetStoreItemRes;
  onClick: () => void;
  isOpen: boolean;
}

function StoreItem({ item, onClick, isOpen }: Props) {
  return (
    <motion.button
      type='button'
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className='relative flex h-fit flex-col items-center justify-end gap-[12px] rounded-[12px] border bg-white pb-[16px] pt-[20px]'
    >
      {item.date && getIsNew(item.date) && <NewTag position='left-0 top-0' />}
      <Image
        src={isOpen ? FROGS[item.key].src : FROGS_SILHOUETTE[item.key]}
        alt='frog character'
        width={77}
        height={108}
        className='w-full'
      />
      <div className='flex flex-col'>
        <span className='text-body-md text-gray-800'>{item.name}</span>
        <span
          className={`text-body-md-bold ${item.is_owned ? 'text-main' : 'text-gray-800'}`}
        >
          {item.is_owned ? '보유중' : `${item.price}P`}
        </span>
      </div>
    </motion.button>
  );
}

export default StoreItem;