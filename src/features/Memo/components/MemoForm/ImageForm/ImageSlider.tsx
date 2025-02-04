import React from 'react';
import Slider from '@/components/Slider/Slider';

interface Props {
  children: React.ReactNode;
}

/** 이미지 전용 슬라이더 */
function ImageSlider({ children }: Props) {
  return <Slider slideClass='gap-[8px]'>{children}</Slider>;
}

export default ImageSlider;
