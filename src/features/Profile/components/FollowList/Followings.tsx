import React from 'react';
import LinkButton from '@/components/Button/LinkButton';
import { PAGES } from '@/constants/page';
import EmptyContentFrog from '@/components/Fallback/EmptyContentFrog';
import { useObserver } from '@/hooks/gesture/useObserver';
import FollowListSkeleton from '@/components/Fallback/Skeleton/FollowListSkeleton';
import { useFollowings } from '../../hooks/useFollowings';
import FollowItem from './FollowItem';

interface Props {
  userId: string;
}

function Followings({ userId }: Props) {
  const {
    followings,
    isEmpty,
    isFetched,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useFollowings(userId);
  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  return (
    <>
      {isEmpty && isFetched && (
        <div className='flex flex-1 flex-col items-center justify-center px-page pb-[24px]'>
          <div className='flex flex-1 items-center justify-center'>
            <EmptyContentFrog title='팔로우하는 사람을 만들어보세요!' />
          </div>
          <LinkButton route={PAGES.FEED}>피드 구경하기</LinkButton>
        </div>
      )}
      {!isEmpty && isFetched && (
        <>
          <div className='flex flex-1 flex-col gap-[28px] overflow-auto px-page py-[36px]'>
            {followings.map((following) => (
              <FollowItem
                key={following.id}
                userId={userId}
                targetUser={following}
              />
            ))}
            {isFetchingNextPage && <FollowListSkeleton />}
          </div>
          {!isFetchingNextPage && (
            <div ref={setTarget} id='observer' className='h-[10px]' />
          )}
        </>
      )}
    </>
  );
}

export default Followings;
