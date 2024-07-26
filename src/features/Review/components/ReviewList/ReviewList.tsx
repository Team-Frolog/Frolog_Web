import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ReviewListItem from './ReviewListItem';
import FirstReviewItem from './FirstReviewItem';
import NoReviewItem from './NoReviewItem';
import { getReviewList } from '../../api/review.api';

interface Props {
  bookId: string;
}

function ReviewList({ bookId }: Props) {
  const { data, isFetched } = useQuery({
    queryKey: ['myReviews', bookId],
    queryFn: () => getReviewList(bookId),
  });

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
              />
            ))}
        </>
      )}
    </div>
  );
}

export default ReviewList;
