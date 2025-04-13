import BookInfo from '@/features/Feed/components/FeedList/BookInfo';
import CustomLink from '@/components/Link/CustomLink';
import { FeedContent } from '@/features/Feed';
import FeedBar from '@/features/Feed/components/FeedList/FeedBar';
import { useLikeFeed } from '@/features/Feed/hooks/feed/useLikeFeed';
import { useUserActionActions } from '@/store/userActionStore';
import { getPath } from '@/utils/getPath';
import { GetMemoRes, GetReviewRes } from '@frolog/frolog-api';
import React from 'react';
import { isGetMemoRes } from '@/features/Feed/utils/typeGuard';

interface Props {
  /** 메모인지 여부 */
  isMemo: boolean;
  /** 사용자 본인 여부 */
  isRootUser?: boolean;
  /** 피드 데이터 객체 */
  feedData: GetReviewRes | GetMemoRes;
  /** 댓글 클릭 시 로딩 시작 핸들러 */
  startCommentLoading: () => void;
  /** 스크롤 저장 핸들러 */
  onSaveScroll: () => void;
}

/** 공통 피드 아이템 정보 */
function FeedItemInfo({
  isMemo,
  feedData,
  onSaveScroll,
  isRootUser = false,
  startCommentLoading,
}: Props) {
  const { handleChangeLike } = useLikeFeed(!isMemo);
  const { setIsInFeed } = useUserActionActions();

  return (
    <div className='flex w-full flex-col'>
      <CustomLink
        prefetch
        href={isMemo ? getPath.memo(feedData.id) : getPath.review(feedData.id)}
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
          isFirstMemo={isGetMemoRes(feedData) ? feedData.is_first : false}
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
  );
}

export default FeedItemInfo;
