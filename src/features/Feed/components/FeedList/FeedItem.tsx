import React from 'react';
import CustomLink from '@/components/Link/CustomLink';
import { GetMemoRes, GetReviewRes } from '@frolog/frolog-api';
import { getPath } from '@/utils/getPath';
import { useUserActionActions } from '@/store/userActionStore';
import ProfileHeader from '@/components/Header/ProfileHeader/ProfileHeader';
import BookInfo from './BookInfo';
import FeedContent from './FeedContent';
import FeedBar from './FeedBar';
import { useLikeFeed } from '../../hooks/feed/useLikeFeed';

interface Props {
  /** 메모인지 여부 */
  isMemo: boolean;
  /** 사용자 피드 여부 */
  isRootUser?: boolean;
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
  isRootUser = false,
  feedData,
  startCommentLoading,
  onSaveScroll,
}: Props) {
  const { handleChangeLike } = useLikeFeed(!isMemo);
  const { setIsInFeed } = useUserActionActions();

  return (
    <div className='w-full'>
      {!isRootUser && (
        <ProfileHeader
          type='feed'
          userId={feedData.writer}
          hasFollow
          onClick={onSaveScroll}
        />
      )}
      <div className='flex w-full flex-col'>
        <CustomLink
          prefetch
          href={
            isMemo ? getPath.memo(feedData.id) : getPath.review(feedData.id)
          }
          className='flex w-full flex-col'
          onClick={() => {
            onSaveScroll();
            setIsInFeed(true);
          }}
        >
          <BookInfo
            isMemo={isMemo}
            feedData={feedData}
            hasToolTip={!isRootUser}
          />
          <FeedContent feedData={feedData} />
        </CustomLink>

        <FeedBar
          feedData={feedData}
          isRootUser={isRootUser}
          onClickLike={() =>
            handleChangeLike({ id: feedData.id, value: !feedData.like })
          }
          onClickComment={() => {
            startCommentLoading();
            onSaveScroll();
          }}
        />
      </div>
    </div>
  );
}

export default FeedItem;
