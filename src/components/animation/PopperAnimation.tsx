'use client';

import React from 'react';
import lottieAni from 'public/lotties/popper.json';
import dynamic from 'next/dynamic';

// eslint-disable-next-line @typescript-eslint/naming-convention
const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

function PopperAnimation() {
  return (
    <div className='absolute left-0 top-0 z-90 w-full'>
      <Lottie animationData={lottieAni} play loop={false} />
    </div>
  );
}

export default PopperAnimation;
