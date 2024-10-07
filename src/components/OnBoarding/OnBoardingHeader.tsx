/* eslint-disable react/no-array-index-key */
import React from 'react';

interface Props {
  activeSlide: number;
}

function OnBoardingHeader({ activeSlide }: Props) {
  return (
    <>
      <div
        className='fixed left-1/2 top-0 z-0 h-[50%] w-[450px] -translate-x-1/2 mobile:w-full'
        style={{
          background:
            'linear-gradient(-35deg, rgba(0, 0, 0, 0) 55%, #0E0E0E 55%)',
        }}
      />
      <div className='z-10 flex w-full shrink-0 flex-col gap-[20px] px-page py-page pb-0'>
        <div className='flex gap-[8px]'>
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className={
                  activeSlide === i + 1 ? 'active-circle' : 'non-active-circle'
                }
              />
            ))}
        </div>
        <h2 className='text-heading-md-bold text-main_hightlight mobile:text-title-xl-bold'>
          우물에 책을 쌓아
          <br />
          탈출하세요!
        </h2>
      </div>
    </>
  );
}

export default OnBoardingHeader;
