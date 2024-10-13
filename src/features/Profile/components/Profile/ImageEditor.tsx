import Image from 'next/image';
import React from 'react';
import { ImageEditIcon } from 'public/icons';
import { useProfileImage } from '../../hooks/useProfileImage';

function ImageEditor() {
  const { profileImage, handleImgChange } = useProfileImage();

  return (
    <div className='relative h-[76px] w-[76px] shrink-0'>
      <input
        type='file'
        accept='image/*'
        onChange={handleImgChange}
        className='absolute left-0 top-0 z-10 h-full w-full cursor-pointer opacity-0'
      />
      <Image
        src={profileImage}
        alt='profile image'
        layout='fill'
        className='rounded-[50%] object-cover'
        loading='eager'
      />
      <ImageEditIcon className='absolute bottom-0 right-0' />
    </div>
  );
}

export default ImageEditor;
