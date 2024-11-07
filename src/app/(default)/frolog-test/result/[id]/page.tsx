import { IMAGES } from '@/constants/images';
import Image from 'next/image';
import React from 'react';
import { testResult, HeaderButtons, StartButton } from '@/features/Test';
import { Metadata } from 'next';

interface Props {
  params: {
    id: '1' | '2' | '3';
  };
}

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export const metadata: Metadata = {
  title: '독서 성향 테스트 결과',
};

function TestResultPage({ params: { id } }: Props) {
  const testData = testResult[Number(id)];

  return (
    <div className='flex h-full w-full overflow-auto bg-gray-900 text-gray-800'>
      <div className='relative flex h-fit w-full flex-col gap-[12px] overflow-auto whitespace-pre-wrap pt-[36px]'>
        <HeaderButtons />
        <div className='flex-col-center relative h-[480px] w-full justify-end gap-[32px] bg-gray-900 mobile:h-[390px]'>
          <Image
            src={IMAGES.test.result[id]}
            alt='shape'
            width={390}
            height={450}
            loading='eager'
            priority
            className='absolute -bottom-[80px] left-0 h-auto w-full mobile:-bottom-[65px]'
          />
        </div>
        <div className='flex-col-center h-fit w-full bg-white pb-[90px]'>
          <div className='flex-col-center z-10 w-[90%] gap-[32px] rounded-[12px] px-[24px] pb-[48px] pt-[120px] mobile:w-full mobile:pb-[48px] mobile:pt-[90px]'>
            <div className='flex-col-center gap-[8px]'>
              <h5 className='text-body-lg-bold'>{testData.quote.title}</h5>
              <span className='text-center text-body-lg'>
                {testData.quote.text}
              </span>
            </div>
            <div className='flex-col-center gap-[20px]'>
              <div className='flex-col-center gap-[8px] text-main'>
                <h3 className='text-title-xl-bold'>{testData.type.title}</h3>
                <span className='text-body-lg-bold'>{testData.type.tag}</span>
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
    </div>
  );
}

export default TestResultPage;
