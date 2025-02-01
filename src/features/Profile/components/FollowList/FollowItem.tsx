import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import { useFollowUser } from '@/features/Feed';
import { getImageSrc } from '@/utils/getImageSrc';
import { GetProfileRes } from '@frolog/frolog-api';
import { useUserId } from '@/store/sessionStore';
import CustomLink from '@/components/Link/CustomLink';

interface Props {
  /** 리스트 조회 대상이 되는 유저 id */
  userId: string;
  /** 팔로워/팔로잉 리스트의 유저 id */
  targetUser: GetProfileRes;
}

/** 팔로워/팔로잉 리스트 아이템 컴포넌트 */
function FollowItem({ userId, targetUser }: Props) {
  const sessionUserId = useUserId();
  const { handleFollow } = useFollowUser(userId);
  const isRootUser = sessionUserId === targetUser.id;
  const isFollowing = !!targetUser.follow;

  return (
    <div className='flex w-full items-center justify-between'>
      <CustomLink
        href={`/${targetUser.id}/profile`}
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
      </CustomLink>
      {!isRootUser && (
        <button
          type='button'
          onClick={() =>
            handleFollow({ id: targetUser.id, value: !isFollowing })
          }
          className={`h-fit rounded-[12px] border border-main px-[16px] py-[8px] text-body-sm-bold ${isFollowing ? 'bg-main text-white' : 'bg-white text-gray-600'}`}
        >
          {isFollowing ? '팔로잉' : '팔로우'}
        </button>
      )}
    </div>
  );
}

export default FollowItem;
