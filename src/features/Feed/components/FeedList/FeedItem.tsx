import React from 'react';
import Link from 'next/link';
import { GetMemoRes, GetReviewRes } from '@frolog/frolog-api';
import ProfileHeader from '../ProfileHeader';
import BookInfo from './BookInfo';
import FeedContent from './FeedContent';
import FeedBar from './FeedBar';
import { useLikeFeed } from '../../hooks/feed/useLikeFeed';

interface Props {
  isMemo: boolean;
  feedData: GetReviewRes | GetMemoRes;
  startCommentLoading: () => void;
  onClickDetail: () => void;
}

function FeedItem({
  isMemo,
  feedData,
  startCommentLoading,
  onClickDetail,
}: Props) {
  const { handleChangeLike } = useLikeFeed(!isMemo);

  return (
    <div className='w-full'>
      <ProfileHeader
        type='feed'
        userId={feedData.writer}
        hasFollow
        onClick={onClickDetail}
      />
      <div className='flex w-full flex-col'>
        <Link
          prefetch
          href={isMemo ? `/memo/${feedData.id}` : `/review/${feedData.id}`}
          className='flex w-full flex-col'
          onClick={onClickDetail}
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
            onClickDetail();
          }}
          onClickDetail={onClickDetail}
        />
      </div>
    </div>
  );
}

export default FeedItem;
