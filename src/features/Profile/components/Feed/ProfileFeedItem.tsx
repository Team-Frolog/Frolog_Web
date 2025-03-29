import FeedItemDetail from '@/features/Profile/components/Feed/FeedItemDetail';

import React from 'react';

/** 사용자 프로필 피드 아이템 */
function ProfileFeedItem() {
  return (
    <div className='flex w-[calc(50%-10px)] flex-col overflow-hidden rounded-[12px]'>
      <div className='absolute rounded-br-[12px] rounded-tl-[12px] bg-gray-900 px-[12px] py-[4px] text-white'>
        소설
      </div>
      <img src='/images/book/book-cover.svg' />
      <div className='flex flex-col gap-[1px]'>
        <FeedItemDetail title='메모' />
        <FeedItemDetail title='리뷰' />
      </div>
    </div>
  );
}

export default ProfileFeedItem;
