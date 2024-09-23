import StartButton from '@/features/Test/components/StartButton';
import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import React from 'react';
import { testResult } from '@/features/Test';
import HeaderButtons from '@/features/Test/components/HeaderButtons';

interface Props {
  params: {
    id: '1' | '2' | '3';
  };
}

function TestResultPage({ params: { id } }: Props) {
  const testData = testResult[Number(id)];

  return (
    <div className='relative flex h-dvh w-full flex-col gap-[12px] overflow-auto whitespace-pre-wrap bg-gray-900 pt-[36px] text-gray-800'>
      <HeaderButtons id={id} />
      <div className='flex-col-center w-full bg-white pb-[70px]'>
        <div className='flex-col-center relative h-[300px] w-full justify-end gap-[32px] bg-gray-900 mobile:h-[270px]'>
          <Image
            src={IMAGES.test.shape[id]}
            alt='shape'
            width={390}
            height={450}
            className='absolute left-0 top-0 w-full'
          />
          <h1 className='z-10 text-center text-heading-lg-bold mobile:text-heading-lg-bold'>
            {testData.title}
          </h1>
        </div>
        <div className='flex-col-center z-10 w-[90%] gap-[32px] rounded-[12px] px-[24px] py-[36px] mobile:w-full mobile:pb-[36px] mobile:pt-[12px]'>
          <h5 className='text-center text-body-xl-bold'>{testData.subTitle}</h5>
          <Image
            src={IMAGES.test.frog[id]}
            alt='frog'
            width={188}
            height={176}
            className={`${id === '3' ? 'w-[228px]' : 'w-[188px]'}`}
          />
          <div className='flex-col-center gap-[8px]'>
            <h5 className='text-body-lg-bold'>{testData.quote.title}</h5>
            <span className='text-center text-body-lg'>
              {testData.quote.text}
            </span>
          </div>
          <hr className='h-[1px] w-full border-gray-500' />
          <div className='flex-col-center gap-[20px]'>
            <div className='flex-col-center gap-[8px]'>
              <h3 className='text-title-xl-bold'>{testData.type.title}</h3>
              <span className='text-body-lg-bold text-main'>
                {testData.type.tag}
              </span>
            </div>
            <ul className='w-full list-inside list-disc'>
              {testData.descriptions.map((item) => (
                <li className=' text-body-md' key={item.id}>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <StartButton />
      </div>
    </div>
  );
}

export default TestResultPage;
