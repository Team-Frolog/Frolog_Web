import React from 'react';
import Link from 'next/link';
import { GetMemoRes, GetReviewRes } from '@frolog/frolog-api';
import ProfileHeader from '../ProfileHeader';
import BookInfo from './BookInfo';
import FeedContent from './FeedContent';
import FeedBar from './FeedBar';
import { useLikeFeed } from '../../hooks/feed/useLikeFeed';

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
  const { handleChangeLike } = useLikeFeed(!isMemo);

  return (
    <div className='w-full'>
      <ProfileHeader
        type='feed'
        userId={feedData.writer}
        hasFollow
        onClick={onSaveScroll}
      />
      <div className='flex w-full flex-col'>
        <Link
          prefetch
          href={isMemo ? `/memo/${feedData.id}` : `/review/${feedData.id}`}
          className='flex w-full flex-col'
          onClick={onSaveScroll}
        >
          <BookInfo isMemo={isMemo} feedData={feedData} />
          <FeedContent feedData={feedData} />
        </Link>

        <FeedBar
          feedData={feedData}
          onClickLike={() =>
            handleChangeLike({ id: feedData.id, value: !feedData.like })
          }
          onClickComment={() => {
            startCommentLoading();
            onSaveScroll();
          }}
          onSaveScroll={onSaveScroll}
        />
      </div>
    </div>
  );
}

export default FeedItem;
