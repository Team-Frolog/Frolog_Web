import React from 'react';
import EmptyContentFrog from '@/components/Fallback/EmptyContentFrog';
import { useFollowers } from '../../hooks/useFollowers';
import FollowItem from './FollowItem';

interface Props {
  userId: string;
}

function Followers({ userId }: Props) {
  const { followers, isEmpty, isFetched } = useFollowers(userId);

  return (
    <>
      {isEmpty && isFetched && (
        <div className='flex flex-1 items-center justify-center'>
          <EmptyContentFrog title='아직 팔로워가 없어요' />
        </div>
      )}
      {!isEmpty && isFetched && (
        <div className='flex flex-1 flex-col gap-[28px] overflow-auto px-page py-[36px]'>
          {followers.map((follower) => (
            <FollowItem
              key={follower.id}
              follower={follower}
              isFollowing={follower.follow}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Followers;
