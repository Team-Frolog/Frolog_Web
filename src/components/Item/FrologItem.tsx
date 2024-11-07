'use client';

import { FROGS, FROGS_SILHOUETTE } from '@/constants/frogs';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { GetStoreItemRes } from '@frolog/frolog-api';
import { getIsNew } from '@/features/Well/utils/getIsNew';
import NewTag from '../Tag/NewTag';

interface Props {
  type: 'store' | 'well';
  isSelected?: boolean;
  item: GetStoreItemRes;
  onClick: () => void;
}

function FrologItem({ type, item, isSelected, onClick }: Props) {
  const { is_owned, is_available, key, name, price, date } = item;

  const handleClickButton = () => {
    if (type === 'well' || !is_owned) {
      onClick();
    }
  };

  return (
    <motion.button
      type='button'
      whileTap={{ scale: 0.95 }}
      onClick={handleClickButton}
      className={`relative flex h-fit flex-col items-center justify-end gap-[12px] rounded-[12px] border bg-white pb-[16px] pt-[20px] ${isSelected ? 'border-main shadow-inner' : 'border-gray-300'}`}
    >
      {type === 'well' && date && getIsNew(date) && (
        <NewTag position='left-0 top-0' />
      )}
      <Image
        src={is_available || is_owned ? FROGS[key].src : FROGS_SILHOUETTE[key]}
        alt='frog character'
        width={77}
        height={108}
        className='w-full'
      />
      <div className='flex flex-col'>
        <span className='text-body-md text-gray-800'>{name}</span>
        {type === 'store' && (
          <span
            className={`text-body-md-bold ${is_owned ? 'text-main' : 'text-gray-800'}`}
          >
            {is_owned ? '보유중' : `${price}P`}
          </span>
        )}
      </div>
    </motion.button>
  );
}

export default FrologItem;
