'use client';

import React from 'react';
import WellItemsSkeleton from '@/components/Fallback/Skeleton/WellItemsSkeleton';
import { useObserver } from '@/hooks/gesture/useObserver';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';
import Observer from '@/components/Gesture/Observer';
import WellListMessage from '@/features/Well/components/WellList/WellListMessage';
import WellAddButton from './WellAddButton';
import WellIcon from './WellIcon/WellIcon';
import { useWells } from '../../hooks/useWells';

interface Props {
  /** 유저 id */
  userId: string;
  /** 현재 로그인한 유저인지 여부 */
  isRootUser: boolean;
}

/** 우물 리스트 컴포넌트 */
function WellList({ userId, isRootUser }: Props) {
  const { wells, hasNextPage, fetchNextPage, isFetchingNextPage } = useWells(
    userId!
  );
  const { setTarget } = useObserver({ hasNextPage, fetchNextPage });

  return (
    <div
      className={`relative flex w-full flex-col pb-[48px] text-gray-800 ${isRootUser ? 'bg-gray-300' : 'bg-white'}`}
    >
      <div className='grid grid-cols-2 gap-[24px] px-page py-[12px]'>
        {isRootUser && <WellAddButton userId={userId!} />}
        {wells?.map((well) => <WellIcon key={well.id} wellData={well} />)}
        <WithConditionalRendering
          condition={isFetchingNextPage}
          fallback={<Observer setTarget={setTarget} />}
        >
          <WellItemsSkeleton />
        </WithConditionalRendering>
      </div>
      {isRootUser && (
        <WellListMessage message='우물에 책을 추가해 플레이리스트처럼 만드세요' />
      )}
    </div>
  );
}

export default WellList;
