'use client';

import React from 'react';
import { useStore } from '../hooks/useStore';
import { useStoreItems } from '../hooks/useStoreItems';
import StoreItem from './StoreItem';

interface Props {
  userId: string;
}

function StoreItemList({ userId }: Props) {
  const { storeItems } = useStoreItems();
  const { handlePurchase } = useStore();

  if (!storeItems) return <></>;

  return (
    <div className='flex w-full flex-col gap-[12px]'>
      <h6 className='text-body-md text-gray-700'>캐릭터</h6>
      <div className='relative grid w-full grid-cols-3 gap-[9px] overflow-hidden'>
        {storeItems
          .sort((a, b) => a.price - b.price)
          .map((item) => (
            <StoreItem
              key={item.key}
              item={item}
              onClick={() => handlePurchase(item.key)}
            />
          ))}
      </div>
    </div>
  );
}

export default StoreItemList;
