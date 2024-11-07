'use client';

import React from 'react';
import { useStore } from '../hooks/useStore';
import StoreItem from './StoreItem';
import { useWallet } from '../hooks/useWallet';

interface Props {
  userId: string;
}

function StoreItemList({ userId }: Props) {
  const { points } = useWallet(userId);
  const { storeItems, handlePurchase } = useStore(points);

  if (!storeItems || points === undefined) return <></>;

  return (
    <div className='flex w-full flex-col gap-[12px]'>
      <h6 className='text-body-md text-gray-700'>캐릭터</h6>
      <div className='relative grid w-full grid-cols-3 gap-[9px] overflow-hidden'>
        {storeItems
          .sort((a, b) => a.price - b.price)
          .map(
            (item) =>
              item.is_available && (
                <StoreItem
                  key={item.key}
                  item={item}
                  isOpen={points >= item.price}
                  onClick={() => handlePurchase(item)}
                />
              )
          )}
      </div>
    </div>
  );
}

export default StoreItemList;
