import React from 'react';
import { useDeleteSheetState } from '@/store/popUpStore';
import { AnimatePresence } from 'framer-motion';
import AlertBottomSheet from '@/layouts/AlertBottomSheet';
import { sheetData } from '@/data/ui/bottomSheet';
import ReviewListItem from './ReviewListItem';
import FirstReviewItem from './FirstReviewItem';
import NoReviewItem from './NoReviewItem';
import { useReviews } from '../../hooks/useReviews';

interface Props {
  bookId: string;
}

function ReviewList({ bookId }: Props) {
  const { isFetched, reviews, setReviewId, deleteReview } = useReviews(bookId);
  const isOpenDeleteSheet = useDeleteSheetState();

  return (
    <div className='flex w-full flex-1 flex-col gap-[12px]'>
      {isFetched && (
        <>
          {reviews.length === 0 && <NoReviewItem />}
          {reviews.length === 1 && (
            <>
              <ReviewListItem
                key={reviews[0].id}
                index={1}
                reviewData={reviews[0]}
                setReviewId={setReviewId}
              />
              {reviews[0].rating >= 3.5 && <FirstReviewItem />}
            </>
          )}
          {reviews.length > 1 &&
            reviews.map((review, i) => (
              <ReviewListItem
                key={review.id}
                index={i + 1}
                reviewData={review}
                setReviewId={setReviewId}
              />
            ))}
        </>
      )}
      <AnimatePresence>
        {isOpenDeleteSheet && (
          <AlertBottomSheet
            sheetData={sheetData.delete_review}
            onClick={deleteReview}
          >
            <p className='text-body_lg'>
              리뷰를 한 번 삭제하면 복구할 수 없어요.
            </p>
          </AlertBottomSheet>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ReviewList;
