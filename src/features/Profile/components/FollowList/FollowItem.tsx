import { IMAGES } from '@/constants/images';
import { PAGES } from '@/constants/page';
import { useFollowUser } from '@/features/Feed/hooks/feed/useFollowUser';
import { getImageSrc } from '@/utils/getImageSrc';
import { GetProfileRes } from '@frolog/frolog-api';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  userId: string;
  targetUser: GetProfileRes;
}

function FollowItem({ userId, targetUser }: Props) {
  const { data: session } = useSession();
  const { handleFollow } = useFollowUser(userId);
  const isMe = session.user.id === targetUser.id;
  const isFollowing = !!targetUser.follow;

  return (
    <div className='flex w-full items-center justify-between'>
      <Link
        href={isMe ? PAGES.PROFILE : `/${targetUser.id}/profile`}
        className='flex items-center gap-[8px]'
      >
        <div className='relative flex h-[40px] w-[40px]'>
          <Image
            src={
              targetUser.image
                ? getImageSrc(targetUser.image, 'profile')!
                : IMAGES.default_profile
            }
            alt='profile image'
            width={40}
            height={40}
            className='rounded-[50%]'
          />
        </div>
        <h5 className='text-body-lg-bold text-gray-600'>
          {targetUser.username}
        </h5>
      </Link>
      {!isMe && <button
        type='button'
        onClick={() => handleFollow({ id: targetUser.id, value: !isFollowing })}
        className={`h-fit rounded-[12px] border border-main px-[16px] py-[8px] text-body-sm-bold ${isFollowing ? 'bg-main text-white' : 'bg-white text-gray-600'}`}
      >
        {isFollowing ? '팔로잉' : '팔로우'}
      </button>}
    </div>
  );
}

export default FollowItem;
