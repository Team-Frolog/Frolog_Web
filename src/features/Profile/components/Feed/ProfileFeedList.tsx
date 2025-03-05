'use client';

import EmptyContentFrog from '@/components/Fallback/EmptyContentFrog';
import ProfileFeedListSkeleton from '@/components/Fallback/Skeleton/Profile/ProfileFeedListSkeleton';
import Observer from '@/components/Gesture/Observer';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';
import LoadingOverlay from '@/components/Spinner/LoadingOverlay';
import ProfileFeedItem from '@/features/Profile/components/Feed/ProfileFeedItem';
import { useObserver } from '@/hooks/gesture/useObserver';
import { useScrollPosition } from '@/hooks/gesture/useScrollPosition';
import { GetMemoRes, GetReviewRes } from '@frolog/frolog-api';
import { InfiniteQueryObserverResult } from '@tanstack/react-query';
import React, { useState } from 'react';

interface Props {
  isMemo: boolean;
  message: string;
  dataList: GetMemoRes[] | GetReviewRes[];
  isEmpty: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
  isFetchingNextPage: boolean;
  isFetched: boolean;
}

function ProfileFeedList({
  isMemo,
  message,
  dataList,
  isEmpty,
  hasNextPage,
  isFetchingNextPage,
  isFetched,
  fetchNextPage,
}: Props) {
  const [isCommentLoading, setIsCommentLoading] = useState(false);

  const { saveScroll } = useScrollPosition({
    condition: isFetched,
    key: 'profile',
  });

  const { setTarget } = useObserver({ hasNextPage, fetchNextPage });

  return (
    <div className='z-10 flex w-full flex-1 flex-col gap-[12px]'>
      <WithConditionalRendering
        condition={!isEmpty}
        fallback={<EmptyContentFrog title={`첫 ${message}를 남겨보세요!'`} />}
      >
        {dataList.map((item) => (
          <ProfileFeedItem
            key={item.id}
            isMemo={isMemo}
            feedData={item}
            startCommentLoading={() => setIsCommentLoading(true)}
            onSaveScroll={saveScroll}
          />
        ))}
        <Observer
          setTarget={setTarget}
          isFetching={isFetchingNextPage}
          fallback={<ProfileFeedListSkeleton />}
        />
      </WithConditionalRendering>
      {isCommentLoading && <LoadingOverlay theme='dark' />}
    </div>
  );
}

export default ProfileFeedList;
