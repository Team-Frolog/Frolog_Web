import React, { useLayoutEffect, useState } from 'react';
import { onBoarding } from '@/data/ui/onBoarding';
import { useRouter } from 'next/navigation';
import Slider, { Settings } from 'react-slick';
import Slide1 from 'public/images/onBoarding/slide-1.svg';
import Slide1SE from 'public/images/onBoarding/slide-1-se.svg';
import Slide2 from 'public/images/onBoarding/slide-2.svg';
import Slide3 from 'public/images/onBoarding/slide-3.svg';
import LightBg from 'public/images/flash/light-bg-onboarding.svg';
import BackButton from '../Button/BackButton';

interface Props {
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
}

/** 온보딩 소개 슬라이드 */
function OnBoardingSlide({ setActiveSlide }: Props) {
  const [isSE, setIsSE] = useState(false);
  const router = useRouter();

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
    beforeChange: (_, next) => {
      setActiveSlide(next + 1);
    },
  };

  useLayoutEffect(() => {
    const checkWidth = () => {
      if (window.innerWidth === 375) {
        setIsSE(true);
      }
    };
    checkWidth();

    window.addEventListener('resize', checkWidth);

    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, []);

  return (
    <div className='flex flex-col gap-[20px] bg-gray-900 pt-[24px] transition-all duration-200'>
      <BackButton
        fill='#B3B6C4'
        onClick={() => router.back()}
        extraClass='px-page'
      />
      <Slider {...settings} className='w-full'>
        <div className='relative !flex h-[calc(80dvh-54px)] flex-col [@media(max-height:750px)]:h-[calc(75dvh-54px)]'>
          <h1 className='absolute left-1/2 top-[18%] z-50 -translate-x-1/2 text-center text-title-xl-bold text-gray-900 [@media(max-width:375px)]:text-title-lg-bold'>
            {onBoarding[1].title()}
          </h1>
          <div className='w-full translate-y-[2px] [@media(max-height:670px)]:translate-y-[3px]'>
            <LightBg />
          </div>
          <div className='flex flex-1 translate-y-[1px] flex-col justify-end bg-gray-300 [@media(max-height:670px)]:translate-y-[2px]'>
            {isSE ? (
              <Slide1SE className='h-auto w-full' />
            ) : (
              <Slide1 className='h-auto w-full' />
            )}
          </div>
        </div>
        <div className='relative !flex h-[calc(80dvh-54px)] flex-col [@media(max-height:750px)]:h-[calc(75dvh-54px)]'>
          <h1 className='absolute left-1/2 top-[18%] z-50 -translate-x-1/2 text-center text-title-xl-bold text-gray-900 [@media(max-width:375px)]:text-title-lg-bold'>
            {onBoarding[2].title()}
          </h1>
          <div className='w-full translate-y-[2px]'>
            <LightBg />
          </div>
          <div className='jutify-center flex flex-1 translate-y-[1px] flex-col bg-gray-300 px-page'>
            <Slide2 className='my-auto h-auto w-full' />
          </div>
        </div>
        <div className='relative !flex h-[calc(80dvh-54px)] flex-col [@media(max-height:750px)]:h-[calc(75dvh-54px)]'>
          <h1 className='absolute left-1/2 top-[18%] z-50 w-[25dvw] -translate-x-1/2 text-center text-title-xl-bold text-gray-900 mobile:w-[70dvw] [@media(max-width:375px)]:text-title-lg-bold'>
            {onBoarding[3].title()}
          </h1>
          <div className='w-full translate-y-[2px]'>
            <LightBg />
          </div>
          <div className='jutify-center flex flex-1 translate-y-[1px] flex-col bg-gray-300 px-page'>
            <Slide3 className='my-auto h-auto w-full [@media(max-height:670px)]:mx-auto [@media(max-height:670px)]:w-[230px]' />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default OnBoardingSlide;
