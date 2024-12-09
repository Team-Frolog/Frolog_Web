import Image from 'next/image';
import React from 'react';
import { IMAGES } from '@/constants/images';

interface Props {
  /** 개구리 상단 타이틀 */
  title: string;
  /** 개구리 이미지 타입 */
  type?: 'with pen' | 'dot';
}

/** 리스트가 비어있는 경우에 활용하는 개구리 컴포넌트
 * - 리뷰/메모/댓글 리스트에서 활용
 * - 도서 상세 > 리뷰 모음에서 활용
 * - 프로필 > 팔로워/팔로잉 리스트에서 활용
 */
function EmptyContentFrog({ title, type = 'with pen' }: Props) {
  return (
    <div className='review-item flex-1 items-center justify-center bg-white text-center'>
      <h3 className='text-body-xl-bold'>{title}</h3>
      {type === 'with pen' ? (
        <Image
          src={IMAGES.frog.fallback.withPen}
          alt='empty frog'
          width={120}
          height={120}
        />
      ) : (
        <Image
          src={IMAGES.frog.fallback.empty_dot}
          alt='empty frog'
          width={120}
          height={120}
        />
      )}
    </div>
  );
}

export default EmptyContentFrog;
