import React from 'react';
import { getTags } from '@/utils/getTags';
import Tag from './Tag';
import Slider from '../Slider/Slider';

interface Props {
  type: 'pros' | 'cons';
  tagKeys: string[];
}

function TagSlider({ type, tagKeys }: Props) {
  const tagData = getTags(type, tagKeys);

  return (
    <Slider
      sliderClass='relative flex w-[98%] overflow-hidden'
      slideClass='gap-[4px]'
    >
      {tagData.map((item) => (
        <Tag key={item.id} type={type} size='small' tagValue={item.value} />
      ))}
    </Slider>
  );
}

export default TagSlider;
