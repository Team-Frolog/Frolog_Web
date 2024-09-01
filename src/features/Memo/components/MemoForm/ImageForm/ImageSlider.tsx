import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ImageSlot from './ImageSlot';

interface Props {
  originImages?: string[] | null[];
  isReadOnly?: boolean;
}

function ImageSlider({
  originImages = [null, null],
  isReadOnly = false,
}: Props) {
  const [images, setImages] = useState<{
    [key: number]: string | null;
  }>({
    1: originImages[0],
    2: originImages[1],
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
        if (index === 2 && images[1] === null) {
          setImages((prev) => ({
            ...prev,
            1: event.target?.result as string,
          }));
        } else {
          setImages((prev) => ({
            ...prev,
            [index]: event.target?.result as string,
          }));
        }
      }
    };
  };

  const handleDeleteImg = (index: number) => {
    if (index === 1) {
      setImages({
        1: images[2],
        2: null,
      });
    } else {
      setImages((prev) => ({ ...prev, [index]: null }));
    }
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
        {[1, 2].map((index) => (
          <ImageSlot
            key={index}
            isReadOnly={isReadOnly}
            src={images[index]}
            index={index}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleImgChange(e, index)
            }
            onDelete={() => handleDeleteImg(index)}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default ImageSlider;
