import React from 'react';
import { onBoarding } from '@/data/ui/onBoarding';
import { useRouter } from 'next/navigation';
import Slider, { Settings } from 'react-slick';
import Slide1 from 'public/images/onBoarding/slide-1.svg';
import Slide2 from 'public/images/onBoarding/slide-2.svg';
import Slide3 from 'public/images/onBoarding/slide-3.svg';
import Slide4 from 'public/images/onBoarding/slide-4.svg';
import BackButton from '../Button/BackButton';

interface Props {
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>;
}

/** 온보딩 소개 슬라이드 */
function OnBoardingSlide({ setActiveSlide }: Props) {
  const router = useRouter();

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
    <div className='flex flex-1 shrink flex-col gap-[20px] bg-gray-900 pt-[24px] transition-all duration-200 mobile:gap-[12px] [@media(max-height:820px)]:gap-[12px]'>
      <BackButton
        fill='#B3B6C4'
        onClick={() => router.back()}
        extraClass='px-page'
      />
      <Slider {...settings} className='flex flex-1 shrink'>
        <div className='flex h-full w-full flex-1 shrink flex-col justify-between'>
          <div className='flex h-full flex-col pb-[20px]'>
            <h1 className='px-page text-heading-md-bold text-main_hightlight mobile:text-title-xl-bold [@media(max-height:700px)]:text-title-xl-bold'>
              {onBoarding[1].title()}
            </h1>
            <div className='flex w-full flex-1 flex-col-reverse'>
              <Slide1
                className='h-auto w-full self-end'
                width={390}
                height={302}
              />
            </div>
          </div>
        </div>
        <div className='flex h-full w-full flex-1 shrink flex-col justify-between px-page'>
          <div className='flex h-full w-full flex-1 flex-col gap-[20px] pb-[20px]'>
            <h1 className='text-heading-md-bold text-main_hightlight mobile:text-title-xl-bold [@media(max-height:700px)]:text-title-xl-bold'>
              {onBoarding[2].title()}
            </h1>
            <div className='flex flex-1 flex-col-reverse items-center'>
              <Slide2
                className='h-full max-h-[337px] w-auto max-w-full self-center [@media(max-height:670px)]:w-[90%]'
                width={342}
                height={337}
              />
            </div>
          </div>
        </div>
        <div className='flex h-full w-full flex-1 shrink flex-col justify-between px-page'>
          <div className='flex h-full w-full flex-1 flex-col gap-[20px] pb-[20px]'>
            <h1 className='text-heading-md-bold text-main_hightlight mobile:text-title-xl-bold [@media(max-height:700px)]:text-title-xl-bold'>
              {onBoarding[3].title()}
            </h1>
            <div className='flex flex-1 flex-col-reverse items-center'>
              <Slide3
                className='h-full max-h-[352px] w-auto max-w-full self-center [@media(max-height:670px)]:w-[90%]'
                width={342}
                height={352}
              />
            </div>
          </div>
        </div>
        <div className='flex h-full w-full flex-1 shrink flex-col justify-between px-page'>
          <div className='flex h-full w-full flex-1 flex-col gap-[20px]'>
            <h1 className='text-heading-md-bold text-main_hightlight mobile:text-title-xl-bold [@media(max-height:700px)]:text-title-xl-bold'>
              {onBoarding[4].title()}
            </h1>
            <div className='flex flex-1 flex-col-reverse items-center'>
              <Slide4
                className='h-full max-h-[389px] w-auto max-w-full self-center [@media(max-height:670px)]:w-[90%]'
                width={362}
                height={389}
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default OnBoardingSlide;
