import React, { useEffect } from 'react';
import Image from 'next/image';
import { splash, SplashKeys } from '@/data/splash';
import { useSplashAction } from '@/store/splashStore';
import { useRouter } from 'next/navigation';
import { ICONS } from '@/constants/icons';
import { IMAGES } from '@/constants/images';
import BigTitle from '../text/BigTitle';

interface Props {
  type: SplashKeys;
}

function Splash({ type }: Props) {
  const router = useRouter();
  const { changeState } = useSplashAction();
  const { getTitle, frog, route } = splash[type];

  useEffect(() => {
    setTimeout(() => {
      router.replace(route);
      changeState(false);
    }, 3000);
  }, []);

  return (
    <div className='fixed top-0 z-50 mx-auto flex h-dvh w-[450px] flex-col justify-between overflow-hidden mobile:left-0 mobile:w-full'>
      <div className='relative z-0 flex h-fit w-full flex-1 flex-col bg-gray-900 pt-[30px]'>
        <Image
          src={ICONS.join.light}
          alt='light'
          width={30}
          height={30}
          className='z-0 w-full'
        />
        <div className='w-full flex-1 bg-white' />
        <div className='absolute left-1/2 z-10 flex h-full w-full -translate-x-1/2 flex-col items-center justify-between gap-[10px] pt-[150px] mobile:pt-[100px]'>
          <BigTitle
            type='default'
            extraClass='text-center mobile:text-h_md_bold'
          >
            {getTitle()}
          </BigTitle>

          <div className='flex flex-1 items-end justify-center'>
            <Image
              src={frog}
              alt='frog'
              width={319}
              height={257}
              className='h-full max-h-[257px] w-full mobile:w-[95%]'
            />
          </div>
        </div>
      </div>
      <Image
        src={IMAGES.ground_sm}
        alt='ground'
        width={390}
        height={106}
        className='w-full'
      />
    </div>
  );
}

export default Splash;
