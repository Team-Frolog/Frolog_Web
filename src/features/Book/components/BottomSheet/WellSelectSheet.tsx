'use client';

import React from 'react';
import { WellIcon, useWells } from '@/features/Well';
import { useObserver } from '@/hooks/gesture/useObserver';
import WellItemsSkeleton from '@/components/Fallback/Skeleton/WellItemsSkeleton';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';

interface Props {
  /** 루트 유저 id */
  userId: string;
  /** 우물 선택 시 동작할 콜백 함수 */
  callback: (value?: any) => void;
  /** 선택 후 pending 여부 (중복 선택 방지)  */
  isPending: boolean;
  /** pending 처리 핸들러 */
  startPending: () => void;
}

/** 우물 선택 바텀시트 컨텐츠 */
function WellSelectSheet({ callback, userId, isPending, startPending }: Props) {
  const { wells, hasNextPage, fetchNextPage, isFetchingNextPage, isFetched } =
    useWells(userId);
  const { setTarget } = useObserver({ hasNextPage, fetchNextPage });

  return (
    <div className='grid max-h-[400px] w-full grid-cols-2 justify-center justify-items-center gap-[20px] overflow-y-auto py-[20px] pb-[40px] scrollbar-hide'>
      <WithConditionalRendering
        condition={isFetched}
        fallback={<WellItemsSkeleton />}
      >
        {wells.map((well) => (
          <WellIcon
            type='select'
            key={well.id}
            wellData={well}
            onClick={
              isPending
                ? undefined
                : () => {
                    callback(well.id);
                    startPending();
                  }
            }
          />
        ))}
      </WithConditionalRendering>
      {!isFetchingNextPage && (
        <div ref={setTarget} id='observer' className='h-[10px]' />
      )}
    </div>
  );
}

export default WellSelectSheet;
