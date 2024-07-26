import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDeleteSheetState } from '@/store/popUpStore';
import { AnimatePresence } from 'framer-motion';
import AlertBottomSheet from '@/layouts/AlertBottomSheet';
import { sheetData } from '@/data/ui/bottomSheet';
import ReviewListItem from './ReviewListItem';
import FirstReviewItem from './FirstReviewItem';
import NoReviewItem from './NoReviewItem';
import { deleteReview, getReviewList } from '../../api/review.api';

interface Props {
  bookId: string;
}

function ReviewList({ bookId }: Props) {
  const [reviewId, setReviewId] = useState<string>('');
  const isOpenDeleteSheet = useDeleteSheetState();

  const { data, isFetched } = useQuery({
    queryKey: ['myReviews', bookId],
    queryFn: () => getReviewList(bookId),
  });

  const handleDeleteReview = async () => {
    const result = await deleteReview(reviewId);

    if (result) {
      window.location.reload();
    }
  };

  return (
    <div className='flex w-full flex-col gap-[12px]'>
      {isFetched && (
        <>
          {data!.reviews.length === 0 && <NoReviewItem />}
          {data!.reviews.length === 1 && <FirstReviewItem />}
          {data!.reviews.length > 1 &&
            data!.reviews.map((review, i) => (
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
            onClick={handleDeleteReview}
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
