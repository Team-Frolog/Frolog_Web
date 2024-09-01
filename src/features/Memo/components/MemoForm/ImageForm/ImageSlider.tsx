import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useMemoImage } from '@/features/Memo/hooks/useMemoImage';
import ImageSlot from './ImageSlot';

interface Props {
  isReadOnly?: boolean;
}

function ImageSlider({ isReadOnly = false }: Props) {
  const { images, handleImgChange, handleDeleteImg } = useMemoImage();
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const motionDivRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={sliderRef} className='flex w-full overflow-hidden'>
      <motion.div
        ref={motionDivRef}
        drag='x'
        dragConstraints={sliderRef}
        dragElastic={0.2}
        className='flex w-fit gap-[20px] px-[24px]'
      >
        {[0, 1].map((index) => (
          <ImageSlot
            key={index}
            isReadOnly={isReadOnly}
            src={
              images[index]
                ? `https://images.frolog.kr/memo/${images[index]}.webp`
                : null
            }
            index={index}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleImgChange(e)
            }
            onDelete={() => handleDeleteImg(index)}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default ImageSlider;
