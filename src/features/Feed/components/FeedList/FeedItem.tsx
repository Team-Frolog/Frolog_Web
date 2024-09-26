import React from 'react';
import { GetMemoRes, GetReviewRes } from '@frolog/frolog-api';
import ProfileHeader from '../ProfileHeader';
import BookInfo from './BookInfo';
import FeedContent from './FeedContent';
import FeedBar from './FeedBar';

interface Props {
  isMemo: boolean;
  feedData: GetReviewRes | GetMemoRes;
}

function FeedItem({ isMemo, feedData }: Props) {
  return (
    <div className='w-full'>
      <ProfileHeader type='feed' userId={feedData.writer} hasFollow />
      <div className='flex w-full flex-col'>
        <BookInfo isMemo={isMemo} feedData={feedData} />
        <FeedContent feedData={feedData} />
        <FeedBar feedData={feedData} />
      </div>
    </div>
  );
}

export default FeedItem;
