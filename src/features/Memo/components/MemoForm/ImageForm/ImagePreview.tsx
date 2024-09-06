import { useClickOutside } from '@/hooks/popup/useClickOutside';
import BackDrop from '@/layouts/BackDrop';
import Portal from '@/layouts/Portal';
import Image from 'next/image';
import React, { useRef } from 'react';

interface Props {
  imgSrc: string;
  closePreview: () => void;
}

function ImagePreview({ imgSrc, closePreview }: Props) {
  const ref = useRef<HTMLImageElement | null>(null);

  useClickOutside(ref, closePreview);

  return (
    <Portal>
      <BackDrop align='center'>
        <Image
          ref={ref}
          src={imgSrc}
          alt='preview image'
          width={450}
          height={450}
          className='w-full'
          onClick={closePreview}
        />
      </BackDrop>
    </Portal>
  );
}

export default ImagePreview;
