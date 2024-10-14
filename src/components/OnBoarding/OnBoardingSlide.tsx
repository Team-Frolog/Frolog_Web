import React from 'react';
import { onBoarding } from '@/data/ui/onBoarding';
import Slider, { Settings } from 'react-slick';
import Slide1 from 'public/images/onBoarding/slide-1.svg';
import Slide2 from 'public/images/onBoarding/slide-2.svg';
import Slide3 from 'public/images/onBoarding/slide-3.svg';
import Slide4 from 'public/images/onBoarding/slide-4.svg';
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
      className={`flex flex-1 shrink flex-col gap-[60px] transition-all duration-200 mobile:gap-0 ${onBoarding[activeSlide].bg}`}
    >
      <OnBoardingHeader activeSlide={activeSlide} />
      <Slider {...settings} className='flex flex-1 shrink'>
        <div className='flex h-full w-full shrink'>
          <div className='flex h-full shrink items-end justify-center'>
            <Slide1 className='h-[50dvh] w-auto' />
          </div>
        </div>
        <div className='flex h-full w-full'>
          <div className='flex h-full items-end justify-start'>
            <Slide2 className='h-[45dvh] w-auto' />
          </div>
        </div>
        <div className='flex h-full w-full'>
          <div className='flex h-full items-end justify-center'>
            <Slide3 className='h-[50dvh] w-auto' />
          </div>
        </div>
        <div className='flex h-full w-full'>
          <div className='flex h-full items-end justify-center'>
            <Slide4 className='h-[50dvh] w-auto' />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default OnBoardingSlide;
