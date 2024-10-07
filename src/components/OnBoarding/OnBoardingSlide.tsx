import React from 'react';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';
import OnBoardingHeader from './OnBoardingHeader';

interface Props {
  activeSlide: number;
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
}

function OnBoardingSlide({ activeSlide, setActiveSlide }: Props) {
  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    beforeChange: (_, next) => {
      setActiveSlide(next + 1);
    },
  };

  return (
    <div
      className={`flex flex-1 shrink flex-col gap-[60px] bg-gray-300 bg-[url('/well-bg.svg')] mobile:gap-[30px]`}
    >
      <OnBoardingHeader activeSlide={activeSlide} />
      <Slider {...settings} className='flex flex-1'>
        <div className='flex h-full w-full'>
          <div className='flex h-full items-end justify-center'>
            <Image
              src='/images/onBoarding/slide-1.svg'
              alt='onBoading 1'
              width={390}
              height={420}
              className='w-full mobile:h-[350px] mobile:w-auto'
            />
          </div>
        </div>
        <div className='flex h-full w-full'>
          <div className='flex h-full items-end justify-start'>
            <Image
              src='/images/onBoarding/slide-2.svg'
              alt='onBoading 2'
              width={390}
              height={420}
              className='w-full mobile:h-[350px] mobile:w-auto'
            />
          </div>
        </div>
        <div className='flex h-full w-full'>
          <div className='flex h-full items-end justify-center'>
            <Image
              src='/images/onBoarding/slide-3.svg'
              alt='onBoading 3'
              width={390}
              height={420}
              className='w-full mobile:h-[350px] mobile:w-auto'
            />
          </div>
        </div>
        <div className='flex h-full w-full'>
          <div className='flex h-full items-end justify-center'>
            <Image
              src='/images/onBoarding/slide-4.svg'
              alt='onBoading 4'
              width={390}
              height={420}
              className='h-auto w-full mobile:w-[80%]'
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default OnBoardingSlide;
