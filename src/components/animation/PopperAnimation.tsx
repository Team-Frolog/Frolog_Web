'use client';

import React from 'react';
import lottieAni from 'public/lotties/popper.json';
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

function PopperAnimation() {
  return (
    <div className='absolute left-0 top-0 z-[100px] w-full'>
      <Lottie animationData={lottieAni} play loop={false} />
    </div>
  );
}

export default PopperAnimation;
