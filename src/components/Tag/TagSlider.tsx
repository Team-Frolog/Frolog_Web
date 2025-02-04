import React from 'react';
import { getTags } from '@/utils/getTags';
import Tag from './Tag';
import Slider from '../Slider/Slider';

interface Props {
  /** 태그 종류 */
  type: 'pros' | 'cons';
  /** 태그 키 값 (영문) */
  tagKeys: string[];
}

/** 리뷰 아이템에 활용되는 태그 슬라이더
 * - 피드
 * - 리뷰 리스트
 * - 도서 상세 > 리뷰 모음
 */
function TagSlider({ type, tagKeys }: Props) {
  if (tagKeys.length === 0) {
    return;
  }

  const tagData = getTags(type, tagKeys);

  return (
    <Slider hasFade slideClass='gap-[4px]'>
      {tagData.map((item) => (
        <Tag key={item.id} type={type} size='small' tagValue={item.value} />
      ))}
    </Slider>
  );
}

export default TagSlider;
