import React from 'react';
import CommentItem from './CommentItem';

function CommentList() {
  return (
    <div className='flex w-full flex-col gap-[36px] py-[16px]'>
      <CommentItem />
      <CommentItem isChild />
    </div>
  );
}

export default CommentList;
