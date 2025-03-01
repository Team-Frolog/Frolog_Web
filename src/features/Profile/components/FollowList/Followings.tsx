import React from 'react';
import LinkButton from '@/components/Button/LinkButton';
import { PAGES } from '@/constants/page';
import EmptyContentFrog from '@/components/Fallback/EmptyContentFrog';
import Observer from '@/components/Gesture/Observer';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';
import { useObserver } from '@/hooks/gesture/useObserver';
import FollowListSkeleton from '@/components/Fallback/Skeleton/Profile/FollowListSkeleton';
import { useFollowings } from '../../hooks/useFollowings';
import FollowItem from './FollowItem';

interface Props {
  /** 리스트 조회 대상이 되는 유저 id */
  userId: string;
}

/** 팔로잉 리스트 */
function Followings({ userId }: Props) {
  const {
    followings,
    isEmpty,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useFollowings(userId);
  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  return (
    <WithConditionalRendering
      condition={!isEmpty}
      fallback={
        <div className='flex flex-1 flex-col items-center justify-center px-page pb-[24px]'>
          <div className='flex flex-1 items-center justify-center'>
            <EmptyContentFrog title='팔로우하는 사람을 만들어보세요!' />
          </div>
          <LinkButton route={PAGES.FEED}>피드 구경하기</LinkButton>
        </div>
      }
    >
      <div className='flex flex-1 flex-col gap-[28px] overflow-auto px-page py-[36px]'>
        {followings.map((following) => (
          <FollowItem
            key={following.id}
            userId={userId}
            targetUser={following}
          />
        ))}
        <Observer
          setTarget={setTarget}
          isFetching={isFetchingNextPage}
          fallback={<FollowListSkeleton />}
        />
      </div>
    </WithConditionalRendering>
  );
}

export default Followings;
