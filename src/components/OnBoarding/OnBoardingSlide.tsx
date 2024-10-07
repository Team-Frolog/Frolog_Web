import React from 'react';
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

  console.log(activeSlide);

  return (
    <div className='flex flex-1 flex-col gap-[60px]'>
      <OnBoardingHeader />
      <Slider {...settings} className='flex flex-1'>
        <div className='flex h-full w-full items-end bg-green-50'>1</div>
        <div className='h-full w-full bg-green-100'>2</div>
        <div className='h-full w-full bg-green-200'>3</div>
        <div className='h-full w-full bg-green-300'>4</div>
      </Slider>
    </div>
  );
}

export default OnBoardingSlide;
