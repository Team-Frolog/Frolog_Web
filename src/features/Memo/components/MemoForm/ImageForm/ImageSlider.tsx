import React from 'react';
import Slider from '@/components/Slider/Slider';

interface Props {
  children: React.ReactNode;
}

function ImageSlider({ children }: Props) {
  return (
    <Slider sliderClass='flex w-full overflow-hidden' slideClass='gap-[8px]'>
      {children}
    </Slider>
  );
}

export default ImageSlider;
