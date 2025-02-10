import { IMAGES } from '@/constants/images';
import { getImageSrc } from '@/utils/getImageSrc';
import Image from 'next/image';
import { ChildArrowIcon } from 'public/icons';
import React from 'react';

interface Props {
  imageUrl?: string;
  isChildComment: boolean;
}

function ProfileImage({ imageUrl, isChildComment }: Props) {
  const image = imageUrl
    ? getImageSrc(imageUrl, 'profile')!
    : IMAGES.default_profile;

  return isChildComment ? (
    <div className='flex items-center gap-[4px]'>
      <ChildArrowIcon />
      <div className='relative flex h-[32px] w-[32px] shrink-0'>
        <Image
          src={image}
          alt='profile image'
          layout='fill'
          unoptimized
          className='rounded-[50%] object-cover'
        />
      </div>
    </div>
  ) : (
    <div className='relative flex h-[40px] w-[40px] shrink-0'>
      <Image
        src={image}
        alt='profile image'
        layout='fill'
        className='rounded-[50%] object-cover'
      />
    </div>
  );
}

export default ProfileImage;
