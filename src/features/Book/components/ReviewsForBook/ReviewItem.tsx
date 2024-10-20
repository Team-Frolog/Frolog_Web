import { ProfileHeader } from '@/features/Feed';
import { GetReviewRes } from '@frolog/frolog-api';
import Link from 'next/link';
import React from 'react';
import FeedContent from '@/features/Feed/components/FeedList/FeedContent';
import LikeButton from '@/components/Button/LikeButton';
import { motion } from 'framer-motion';
import { runWhenLoggedIn } from '@/utils/runWhenLoggedIn';
import { ChatIcon } from 'public/icons';
import { formatDate } from '@/utils/date';
import { useRouter } from 'next/navigation';
import ReviewItemHeader from './ReviewItemHeader';

interface Props {
  reviewData: GetReviewRes;
  category: string;
}

function ReviewItem({ reviewData, category }: Props) {
  const router = useRouter();

  return (
    <div className='w-full'>
      <ProfileHeader type='feed' userId={reviewData.writer} hasFollow />
      <div className='flex w-full flex-col'>
        <Link
          href={`/review/${reviewData.id}`}
          className='flex w-full flex-col'
        >
          <ReviewItemHeader rating={reviewData.rating} category={category} />
          <FeedContent feedData={reviewData} isFeed={false} />
        </Link>

        <div className='flex w-full items-center justify-between bg-white px-page py-[12px]'>
          <span className='text-body-md text-gray-600'>
            {formatDate(reviewData.date)}
          </span>
          <div className='flex gap-[20px]'>
            <LikeButton
              isLiked={reviewData.like ?? false}
              likeCount={reviewData.like_count || 0}
              onClickLike={() => runWhenLoggedIn(() => {}, 'feed')}
            />
            <motion.button
              whileTap={{ scale: 1.1 }}
              type='button'
              className='flex items-center gap-[4px]'
              onClick={() =>
                runWhenLoggedIn(
                  () =>
                    router.push(`/feed/${reviewData.id}/comments?type=review`),
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
