import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import React from 'react';

interface Props {
  isFollowing?: boolean;
}

function FollowItem({ isFollowing }: Props) {
  return (
    <div className='flex w-full items-center justify-between'>
      <div className='flex items-center gap-[8px]'>
        <Image
          src={IMAGES.default_profile}
          alt='profile image'
          width={40}
          height={40}
          className='rounded-[50%]'
        />
        <h5 className='text-body-lg-bold text-gray-600'>
          홍길동과고길동과도라에몽
        </h5>
      </div>
      <button
        type='button'
        className={`h-fit rounded-[12px] border border-main px-[16px] py-[8px] text-body-sm-bold ${isFollowing ? 'bg-main text-white' : 'bg-white text-gray-600'}`}
      >
        팔로우
      </button>
    </div>
  );
}

export default FollowItem;
