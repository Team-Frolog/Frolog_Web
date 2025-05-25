'use client';

import ProfileFeedItem from '@/features/Profile/components/Feed/ProfileFeedItem';
import { useProfileFeed } from '@/features/Profile/hooks/useProfileFeed';
import { useObserver } from '@/hooks/gesture/useObserver';
import Observer from '@/components/Gesture/Observer';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';
import NoProfileFeed from './NoProfileFeed';

function ProfileFeed() {
  const {
    profileFeed,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isEmpty,
  } = useProfileFeed();

  console.log(isEmpty);

  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  return (
    <div className='relative flex flex-wrap gap-[20px] px-page'>
      <WithConditionalRendering
        condition={!isEmpty}
        fallback={<NoProfileFeed />}
      >
        {profileFeed.map((item) => (
          <ProfileFeedItem key={item.book.isbn} feedData={item} />
        ))}
      </WithConditionalRendering>
      <Observer isFetching={isFetchingNextPage} setTarget={setTarget} />
    </div>
  );
}

export default ProfileFeed;
