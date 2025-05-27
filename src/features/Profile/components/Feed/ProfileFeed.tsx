'use client';

import ProfileFeedItem from '@/features/Profile/components/Feed/ProfileFeedItem';
import { useProfileFeed } from '@/features/Profile/hooks/useProfileFeed';
import { useObserver } from '@/hooks/gesture/useObserver';
import Observer from '@/components/Gesture/Observer';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';
import NoProfileFeed from './NoProfileFeed';
import { GetProfileFeedRes } from '@frolog/frolog-api';
import ProfileFeedListSkeleton from '@/components/Fallback/Skeleton/Profile/ProfileFeedListSkeleton';

interface Props {
  initialProfileFeed: GetProfileFeedRes;
}

function ProfileFeed({ initialProfileFeed }: Props) {
  const {
    profileFeed,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isEmpty,
  } = useProfileFeed(initialProfileFeed);

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
        <Observer
          extraClassName='absolute bottom-[20px] left-0 right-0'
          isFetching={isFetchingNextPage}
          setTarget={setTarget}
          fallback={<ProfileFeedListSkeleton />}
        />
      </WithConditionalRendering>
    </div>
  );
}

export default ProfileFeed;
