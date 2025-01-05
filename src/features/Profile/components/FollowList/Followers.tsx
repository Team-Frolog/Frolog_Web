import React from 'react';
import EmptyContentFrog from '@/components/Fallback/EmptyContentFrog';
import { useObserver } from '@/hooks/gesture/useObserver';
import FollowListSkeleton from '@/components/Fallback/Skeleton/FollowListSkeleton';
import { useFollowers } from '../../hooks/useFollowers';
import FollowItem from './FollowItem';

interface Props {
  /** 리스트 조회 대상이 되는 유저 id */
  userId: string;
}

/** 팔로워 리스트 */
function Followers({ userId }: Props) {
  const {
    followers,
    isEmpty,
    isFetched,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useFollowers(userId);
  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  return (
    <>
      {isEmpty && isFetched && (
        <div className='flex flex-1 items-center justify-center'>
          <EmptyContentFrog title='아직 팔로워가 없어요' />
        </div>
      )}
      {!isEmpty && isFetched && (
        <>
          <div className='flex flex-1 flex-col gap-[28px] overflow-auto px-page py-[36px]'>
            {followers.map((follower) => (
              <FollowItem
                key={follower.id}
                userId={userId}
                targetUser={follower}
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

export default Followers;
