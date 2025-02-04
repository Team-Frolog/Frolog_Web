'use client';

import { useSlideDrag } from '@/hooks/gesture/useSlideDrag';
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  /** 슬라이더 내부 슬라이드의 추가적인 클래스 */
  slideClass?: string;
  /** 흐림 효과 여부 */
  hasFade?: boolean;
  /** justify-between 여부 */
  isBetween?: boolean;
}

/** 태그, 이미지, 프로필에 활용되는 draggable 슬라이드
 * @param slideClass - slide 적용 클래스
 * @param hasFade - 흐림 효과 여부 (태그 슬라이더)
 * @param isBetween - 슬라이더 내 justify-between 여부 (프로필)
 */
function Slider({
  children,
  slideClass,
  hasFade = false,
  isBetween = false,
}: Props) {
  const { sliderRef, motionDivRef, drag, widthClass } = useSlideDrag(isBetween);

  return (
    <div ref={sliderRef} className='relative flex w-full overflow-hidden'>
      {hasFade && (
        <>
          <div
            className='absolute bottom-0 left-0 z-10 h-full w-[50px] -rotate-180 transition-all duration-300'
            style={{
              boxShadow: 'inset -30px 0px 10px -7px rgb(255, 255, 255)',
            }}
          />
          <div
            className='absolute bottom-0 right-0 z-10 h-full w-[30px] transition-all duration-300'
            style={{
              boxShadow: 'inset -30px 0px 10px -7px rgb(255, 255, 255)',
            }}
          />
        </>
      )}
      <motion.div
        ref={motionDivRef}
        drag={drag}
        dragConstraints={sliderRef}
        dragElastic={0.2}
        className={`flex h-full px-[24px] ${widthClass} ${slideClass}`}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Slider;
