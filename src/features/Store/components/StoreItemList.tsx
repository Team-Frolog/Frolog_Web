'use client';

import React from 'react';
import FrologItem from '@/components/FrologItem/FrologItem';
import { useStore } from '../hooks/useStore';
import { useWallet } from '../hooks/useWallet';

interface Props {
  /** 현재 로그인한 유저 id */
  userId: string;
}

/** 상점 아이템 리스트 컴포넌트 */
function StoreItemList({ userId }: Props) {
  const { points } = useWallet(userId);
  const { storeItems, handlePurchase } = useStore(userId, points);

  if (!storeItems || points === undefined) return null;

  return (
    <div className='flex w-full flex-col gap-[12px]'>
      <h6 className='text-body-md text-gray-700'>캐릭터</h6>
      <div className='relative grid w-full grid-cols-3 gap-[9px] overflow-hidden'>
        {storeItems
          .sort((a, b) => a.price - b.price)
          .map(
            (item) =>
              !item.disabled && (
                <FrologItem
                  type='store'
                  key={item.key}
                  item={item}
                  onClick={() => handlePurchase(item)}
                />
              )
          )}
      </div>
    </div>
  );
}

export default StoreItemList;
