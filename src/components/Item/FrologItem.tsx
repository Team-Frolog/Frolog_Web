'use client';

import { FROGS, FROGS_SILHOUETTE } from '@/constants/frogs';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { GetStoreItemRes } from '@frolog/frolog-api';
import { getIsNew } from '@/features/Well/utils/getIsNew';
import NewTag from '../Tag/NewTag';

interface Props {
  /** 해당 컴포넌트 사용 위치  */
  type: 'store' | 'well';
  /** 아이템 선택 상태 */
  isSelected?: boolean;
  /** 아이템 데이터 */
  item: GetStoreItemRes;
  /** 아이템 클릭 시 핸들러 */
  onClick: () => void;
}

/** 상점, 우물 생성에 활용되는 아이템 컴포넌트
 * - isSelected가 주어지는 경우, 테두리가 칠해집니다.
 * - type='store'인 경우, 가격/보유 여부가 포함됩니다.
 */
function FrologItem({ type, item, isSelected, onClick }: Props) {
  const { is_owned, is_available, key, name, price, date } = item;

  /** 조건에 따라 onClick이 동작하도록 하는 핸들러
   * - 우물 생성 중인 경우
   * - 상점이라면 캐릭터를 보유하고 있지 않은 경우
   */
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
