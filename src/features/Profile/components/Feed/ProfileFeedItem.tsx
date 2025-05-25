import { CATEGORY } from '@/constants/category';
import FeedItemDetail from '@/features/Profile/components/Feed/FeedItemDetail';
import { GetProfileFeedItem } from '@frolog/frolog-api';
import Image from 'next/image';

import React from 'react';

interface Props {
  feedData: GetProfileFeedItem;
}

/** 사용자 프로필 피드 아이템 */
function ProfileFeedItem({ feedData }: Props) {
  const { memoCount, reviewCount, wellId } = feedData;
  const { image, category, isbn } = feedData.book;

  return (
    <div className='flex w-[calc(50%-10px)] flex-col overflow-hidden rounded-[12px]'>
      <div
        className='absolute rounded-br-[12px] rounded-tl-[12px] bg-gray-900 px-[12px] py-[4px]'
        style={{ color: CATEGORY[category].band }}
      >
        {CATEGORY[category].name}
      </div>
      <Image
        src={image!}
        alt='book cover'
        width={191}
        height={272}
        className='flex-[8]'
      />
      <div className='flex flex-col gap-[1px]'>
        <FeedItemDetail
          title='메모'
          count={memoCount}
          category={category}
          path={`well/${wellId}/book/${isbn}/memo`}
        />
        <FeedItemDetail
          title='리뷰'
          count={reviewCount}
          category={category}
          path={`well/${wellId}/book/${isbn}/review`}
        />
      </div>
    </div>
  );
}

export default ProfileFeedItem;
