import { useClickOutside } from '@/hooks/popup/useClickOutside';
import BackDrop from '@/layouts/BackDrop';
import Portal from '@/layouts/Portal';
import Image from 'next/image';
import React, { useRef } from 'react';

interface Props {
  /** 이미지 주소 */
  imgSrc: string;
  /** 미리보기 닫힘 핸들러 */
  closePreview: () => void;
}

/** 이미지 미리보기 컴포넌트 */
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
