import StartButton from '@/components/testPage/StartButton';
import { IMAGES } from '@/constants/images';
import { testResult } from '@/data/testResult';
import Image from 'next/image';
import React from 'react';

interface Props {
  params: {
    id: string;
  };
}

function TestResultPage({ params: { id } }: Props) {
  const testData = testResult[Number(id)];

  return (
    <div className='flex h-fit w-full flex-col gap-[12px] whitespace-pre-wrap pt-[60px] text-gray-800'>
      <div className='flex w-full flex-col items-center bg-white pb-[70px]'>
        <div className='relative flex h-[300px] w-full flex-col items-center justify-end gap-[32px] bg-gray-900 mobile:h-[270px]'>
          <Image
            src={IMAGES.test.shape[id as '1' | '2' | '3']}
            alt='shape'
            width={390}
            height={450}
            className='absolute left-0 top-0 w-full'
          />
          <h1 className='z-10 text-center text-h_lg_bold mobile:text-h_lg_bold'>
            {testData.title}
          </h1>
        </div>
        <div className='z-10 flex flex-col items-center gap-[32px] rounded-[12px] px-[24px] py-[36px] mobile:pb-[36px] mobile:pt-[12px]'>
          <h5 className='text-center text-body_xl_bold'>{testData.subTitle}</h5>
          <Image
            src={IMAGES.test.frog[id as '1' | '2' | '3']}
            alt='frog'
            width={188}
            height={176}
            className={`h-[200px] ${id === '3' && 'w-[228px]'}`}
          />
          <div className='flex flex-col items-center gap-[8px]'>
            <h5 className='text-body_lg_bold'>{testData.quote.title}</h5>
            <span className='text-center text-body_lg'>
              {testData.quote.text}
            </span>
          </div>
          <hr className='h-[1px] w-full border-gray-500' />
          <div className='flex flex-col items-center gap-[20px]'>
            <div className='flex flex-col items-center gap-[8px]'>
              <h3 className='text-title_xl_bold'>{testData.type.title}</h3>
              <span className='text-body_lg_bold text-main'>
                {testData.type.tag}
              </span>
            </div>
            <ul className='w-full list-disc'>
              {testData.descriptions.map((item) => (
                <li className='text-body_md' key={item.id}>
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
