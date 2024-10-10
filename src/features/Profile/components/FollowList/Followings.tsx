import React from 'react';
import EmptyContentFrog from '@/components/Fallback/EmptyContentFrog';
import { useFollowings } from '../../hooks/useFollowings';
import FollowItem from './FollowItem';

interface Props {
  userId: string;
}

function Followings({ userId }: Props) {
  const { followings, isEmpty, isFetched } = useFollowings(userId);

  return (
    <>
      {isEmpty && isFetched && (
        <div className='flex flex-1 items-center justify-center'>
          <EmptyContentFrog title='팔로우하는 사람을 만들어보세요!' />
        </div>
      )}
      {!isEmpty && isFetched && (
        <div className='flex flex-1 flex-col gap-[28px] overflow-auto px-page py-[36px]'>
          {followings.map((following) => (
            <FollowItem
              key={following.id}
              follower={following}
              isFollowing={following.follow}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Followings;
