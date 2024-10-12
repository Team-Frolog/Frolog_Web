import Image from 'next/image';
import React from 'react';
import { ImageEditIcon } from 'public/icons';
import { IMAGES } from '@/constants/images';
import { useProfileImage } from '../../hooks/useProfileImage';

function ImageEditor() {
  const { profileImage, handleImgChange } = useProfileImage();

  return (
    <button type='button' className='relative'>
      <input
        type='file'
        accept='image/*'
        onChange={handleImgChange}
        className='absolute left-0 top-0 h-full w-full cursor-pointer opacity-0'
      />
      <Image
        src={profileImage || IMAGES.default_profile}
        alt='profile image'
        width={76}
        height={76}
        className='rounded-[50%]'
      />
      <ImageEditIcon className='absolute bottom-0 right-0' />
    </button>
  );
}

export default ImageEditor;
