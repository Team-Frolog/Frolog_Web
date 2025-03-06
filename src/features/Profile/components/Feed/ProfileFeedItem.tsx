import React from 'react';
import FeedItemInfo from '@/components/Feed/FeedItemInfo';
import { GetReviewRes, GetMemoRes } from '@frolog/frolog-api';

interface Props {
  isMemo: boolean;
  feedData: GetReviewRes | GetMemoRes;
  startCommentLoading: () => void;
  onSaveScroll: () => void;
}

/** 사용자 프로필 피드 아이템 */
function ProfileFeedItem({
  isMemo,
  feedData,
  startCommentLoading,
  onSaveScroll,
}: Props) {
  return (
    <>
      <FeedItemInfo
        isMemo={isMemo}
        isRootUser
        feedData={feedData}
        startCommentLoading={startCommentLoading}
        onSaveScroll={onSaveScroll}
      />
    </>
  );
}

export default ProfileFeedItem;
