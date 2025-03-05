import React from 'react';
import { GetMemoRes, GetReviewRes } from '@frolog/frolog-api';
import ProfileHeader from '@/components/Header/ProfileHeader/ProfileHeader';
import FeedItemInfo from '@/components/Feed/FeedItemInfo';

interface Props {
  /** 메모인지 여부 */
  isMemo: boolean;
  /** 피드 데이터 객체 */
  feedData: GetReviewRes | GetMemoRes;
  /** 댓글 클릭 시 로딩 시작 핸들러 */
  startCommentLoading: () => void;
  /** 스크롤 저장 핸들러 */
  onSaveScroll: () => void;
}

/** 피드 아이템 컴포넌트 */
function FeedItem({
  isMemo,
  feedData,
  startCommentLoading,
  onSaveScroll,
}: Props) {
  return (
    <div className='w-full'>
      <ProfileHeader
        type='feed'
        userId={feedData.writer}
        hasFollow
        onClick={onSaveScroll}
      />
      <FeedItemInfo
        isMemo={isMemo}
        feedData={feedData}
        startCommentLoading={startCommentLoading}
        onSaveScroll={onSaveScroll}
      />
    </div>
  );
}

export default FeedItem;
