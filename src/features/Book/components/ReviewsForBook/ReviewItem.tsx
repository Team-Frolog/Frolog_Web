import { FeedContent } from '@/features/Feed';
import { GetReviewRes } from '@frolog/frolog-api';
import React from 'react';
import CustomLink from '@/components/Link/CustomLink';
import ProfileHeader from '@/components/Header/ProfileHeader/ProfileHeader';
import LikeButton from '@/components/Button/LikeButton';
import { getPath } from '@/utils/getPath';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { motion } from 'framer-motion';
import { runWhenLoggedIn } from '@/utils/runWhenLoggedIn';
import { ChatIcon } from 'public/icons';
import { formatDate } from '@/utils/date';
import ReviewItemHeader from './ReviewItemHeader';

interface Props {
  reviewData: GetReviewRes;
  category: string;
  onClickLike: () => void;
}

/** 도서 상세 > 리뷰 모음의 리뷰 아이템 컴포넌트
 * - 피드와 동일한 ProfileHeader, FeedContent 컴포넌트를 활용합니다.
 */
function ReviewItem({ reviewData, category, onClickLike }: Props) {
  const { navigate } = useCustomRouter('search');

  return (
    <div className='w-full'>
      <ProfileHeader type='feed' userId={reviewData.writer} hasFollow />
      <div className='flex w-full flex-col'>
        <CustomLink
          href={getPath.review(reviewData.id)}
          className='flex w-full flex-col'
        >
          <ReviewItemHeader rating={reviewData.rating} category={category} />
          <FeedContent feedData={reviewData} isFeed={false} />
        </CustomLink>

        <div className='flex w-full items-center justify-between bg-white px-page py-[12px]'>
          <span className='text-body-md text-gray-600'>
            {formatDate(reviewData.date)}{' '}
            {reviewData.date !== reviewData.edit && '(수정됨)'}
          </span>
          <div className='flex gap-[20px]'>
            <LikeButton
              isLiked={reviewData.like ?? false}
              likeCount={reviewData.like_count || 0}
              onClickLike={() => runWhenLoggedIn(onClickLike, 'feed')}
            />
            <motion.button
              whileTap={{ scale: 1.1 }}
              type='button'
              className='flex items-center gap-[4px]'
              onClick={() =>
                runWhenLoggedIn(
                  () => navigate(getPath.comments(reviewData.id, 'review')),
                  'feed'
                )
              }
            >
              <ChatIcon />
              <span className='text-body-md text-gray-600'>
                {reviewData.comment_count || 0}
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
