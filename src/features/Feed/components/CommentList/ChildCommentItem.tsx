import React from 'react';
import { useProfile } from '@/hooks/useProfile';
import useCommentStore from '@/store/commentStore';
import LikeButton from '@/components/Button/LikeButton';
import { GetMemoCommentRes, GetReviewCommentRes } from '@frolog/frolog-api';
import { motion } from 'framer-motion';
import { formatDate } from '@/utils/format';
import ProfileHeader from '../ProfileHeader';

interface Props {
  childCommentData: GetReviewCommentRes | GetMemoCommentRes;
}

function ChildCommentItem({ childCommentData }: Props) {
  const { writer, mention, content, like_count, date } = childCommentData;
  const { profile } = useProfile(writer);
  const { profile: memtionProfile } = useProfile(mention);
  const setCommentUser = useCommentStore((state) => state.setCommentUser);

  if (!profile || !childCommentData) return <></>;

  return (
    <div className='flex w-full flex-col gap-[12px] pl-[24px]'>
      <ProfileHeader type='comment' userId={writer} isChildComment />
      <p className='break-all px-page text-body-lg text-gray-800'>
        <strong className='mr-[8px] font-normal text-main'>
          {memtionProfile?.username}
        </strong>
        {content}
      </p>
      <div className='flex items-center justify-between px-page'>
        <div className='flex gap-[8px]'>
          <LikeButton likeCount={like_count || 0} />
          <motion.button
            whileTap={{ scale: 1.1 }}
            type='button'
            className='text-body-md text-gray-600'
            onClick={() =>
              setCommentUser({
                id: writer,
                name: profile.username,
              })
            }
          >
            댓글 달기
          </motion.button>
        </div>
        <span className='text-body-md text-gray-600'>{formatDate(date)}</span>
      </div>
    </div>
  );
}

export default ChildCommentItem;
