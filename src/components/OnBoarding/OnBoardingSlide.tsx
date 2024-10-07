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
      className={`flex flex-1 shrink flex-col gap-[60px] bg-gray-300 bg-[url('/well-bg.svg')]`}
    >
      <OnBoardingHeader activeSlide={activeSlide} />
      <Slider {...settings} className='flex flex-1 shrink'>
        <div className='flex h-full w-full items-end'>
          <div className='flex h-full items-end'>
            <Image
              src='/images/onBoarding/slide-1.svg'
              alt='onBoading 1'
              width={390}
              height={420}
              className='w-full'
            />
          </div>
        </div>
        <div className='h-full w-full'>
          <Image
            src='/images/onBoarding/slide-2.svg'
            alt='onBoading 2'
            width={390}
            height={420}
            className='w-full'
          />
        </div>
        <div className='h-full w-full'>
          <Image
            src='/images/onBoarding/slide-3.svg'
            alt='onBoading 3'
            width={390}
            height={420}
            className='w-full'
          />
        </div>
        <div className='h-full w-full'>
          <Image
            src='/images/onBoarding/slide-4.svg'
            alt='onBoading 4'
            width={390}
            height={420}
            className='w-full'
          />
        </div>
      </Slider>
    </div>
  );
}

export default OnBoardingSlide;
