'use client';

import { useMemos } from '@/features/Memo/hooks/useMemos';
import ProfileFeedList from '@/features/Profile/components/Feed/ProfileFeedList';

interface Props {
  userId: string;
}

function ProfileMemoList({ userId }: Props) {
  const memoData = useMemos(userId);
  return (
    <ProfileFeedList
      isMemo
      message='메모'
      {...{ dataList: memoData.memoList, ...memoData }}
    />
  );
}

export default ProfileMemoList;
