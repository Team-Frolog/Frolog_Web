import Image from 'next/image';
import React from 'react';
import { ImageEditIcon } from 'public/icons';
import { IMAGES } from '@/constants/images';

function ImageEditor() {
  return (
    <button type='button' className='relative'>
      <Image
        src={IMAGES.default_profile}
        alt='profile image'
        width={76}
        height={76}
      />
      <ImageEditIcon className='absolute bottom-0 right-0' />
    </button>
  );
}

export default ImageEditor;
