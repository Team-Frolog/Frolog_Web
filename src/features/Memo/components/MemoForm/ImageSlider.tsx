import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ImgPlusIcon } from 'public/icons';
import Image from 'next/image';

function ImageSlider() {
  const [images, setImages] = useState<{
    [key: number]: string | null;
  }>({
    1: null,
    2: null,
  });
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const motionDivRef = useRef<HTMLDivElement | null>(null);

  const handleImgChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        setImages((prev) => ({
          ...prev,
          [index]: event.target?.result as string,
        }));
      }
    };
  };

  return (
    <div ref={sliderRef} className='flex w-full overflow-hidden'>
      <motion.div
        ref={motionDivRef}
        drag='x'
        dragConstraints={sliderRef}
        dragElastic={0.2}
        className='flex w-fit gap-[20px] px-[24px]'
      >
        {images[1] ? (
          <div className='h-[290px] w-[290px] shrink-0 overflow-hidden'>
            <Image
              src={images[1]!}
              alt='memo-img'
              width={290}
              height={290}
              className='h-full w-fit'
            />
          </div>
        ) : (
          <div className='relative flex h-[290px] w-[290px] items-center justify-center rounded-[8px] bg-gray-200'>
            <input
              type='file'
              accept='image/*'
              onChange={(e) => handleImgChange(e, 1)}
              className='absolute left-0 top-0 h-full w-full cursor-pointer opacity-0'
            />

            <ImgPlusIcon />
          </div>
        )}
        {images[2] ? (
          <div className='h-[290px] w-[290px] shrink-0 overflow-hidden'>
            <Image
              src={images[2]!}
              alt='memo-img'
              width={290}
              height={290}
              className='h-full w-fit'
            />
          </div>
        ) : (
          <div className='relative flex h-[290px] w-[290px] items-center justify-center rounded-[8px] bg-gray-200'>
            <input
              type='file'
              accept='image/*'
              onChange={(e) => handleImgChange(e, 2)}
              className='absolute left-0 top-0 h-full w-full cursor-pointer opacity-0'
            />

            <ImgPlusIcon />
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default ImageSlider;
