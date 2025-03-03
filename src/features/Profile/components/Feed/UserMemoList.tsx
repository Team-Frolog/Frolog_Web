import EmptyContentFrog from '@/components/Fallback/EmptyContentFrog';
import MemoListSkeleton from '@/components/Fallback/Skeleton/Memo/MemoListSkeleton';
import Observer from '@/components/Gesture/Observer';
import WithConditionalRendering from '@/components/HOC/WithConditionalRendering';
import LoadingOverlay from '@/components/Spinner/LoadingOverlay';
import FeedItem from '@/features/Feed/components/FeedList/FeedItem';
import { useMemos } from '@/features/Memo/hooks/useMemos';
import { useObserver } from '@/hooks/gesture/useObserver';
import { useScrollPosition } from '@/hooks/gesture/useScrollPosition';
import { useUserId } from '@/store/sessionStore';
import { useState } from 'react';

function UserMemo() {
  const [isCommentLoading, setIsCommentLoading] = useState(false);
  const userId = useUserId();
  const {
    memoList,
    isEmpty,
    hasNextPage,
    isFetched,
    fetchNextPage,
    isFetchingNextPage,
  } = useMemos(userId!);
  const { saveScroll } = useScrollPosition({
    condition: isFetched,
    key: 'profile',
  });

  const { setTarget } = useObserver({
    hasNextPage,
    fetchNextPage,
  });

  return (
    <div className='z-10 flex w-full flex-1 flex-col gap-[12px]'>
      <WithConditionalRendering
        condition={!isEmpty}
        fallback={<EmptyContentFrog title='첫 메모를 남겨보세요!' />}
      >
        {memoList.map((item) => (
          <FeedItem
            key={item.id}
            isMemo
            feedData={item}
            startCommentLoading={() => setIsCommentLoading(true)}
            onSaveScroll={saveScroll}
          />
        ))}
        <Observer
          setTarget={setTarget}
          isFetching={isFetchingNextPage}
          fallback={<MemoListSkeleton />}
        />
      </WithConditionalRendering>
      {isCommentLoading && <LoadingOverlay theme='dark' />}
    </div>
  );
}

export default UserMemo;
