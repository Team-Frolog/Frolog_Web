'use client';

import ProfileFeedList from '@/features/Profile/components/Feed/ProfileFeedList';
import { useUserReviews } from '@/features/Profile/hooks/useUserReviews';

interface Props {
  userId: string;
}

function ProfileReviewList({ userId }: Props) {
  const reviewData = useUserReviews(userId);
  return (
    <ProfileFeedList
      isMemo={false}
      message='리뷰'
      {...{ dataList: reviewData.reviewList, ...reviewData }}
    />
  );
}

export default ProfileReviewList;
