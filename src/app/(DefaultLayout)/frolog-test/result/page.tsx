'use client';

import { testResult } from '@/data/testResult';
import { useSearchParams } from 'next/navigation';
import React from 'react';

function TestResultPage() {
  const type = useSearchParams().get('type');
  const testData = testResult[Number(type)];

  return (
    <div className='flex h-fit w-full flex-col gap-[12px] whitespace-pre-wrap pt-[60px] text-gray-800'>
      <div className='flex w-full flex-col items-center gap-[32px] rounded-[12px] bg-white py-[32px]'>
        <div className='h-[80px] w-[80px] bg-gray-400'>logo</div>
        <div className='flex flex-col items-center gap-[16px]'>
          <h1 className='text-center text-h_lg_bold'>{testData.title}</h1>
          <h5 className='text-body_xl_bold text-center'>{testData.subTitle}</h5>
        </div>
        <div className='h-[180px] w-[180px] bg-gray-400'>frog</div>
        <div className='flex flex-col items-center gap-[8px]'>
          <h5 className='text-body_lg_bold'>{testData.quote.title}</h5>
          <span className='text-center text-body_lg'>
            {testData.quote.text}
          </span>
        </div>
        <hr className='h-[1px] w-[70%] border-gray-500' />
        <div className='flex flex-col items-center gap-[20px]'>
          <div className='flex flex-col items-center gap-[8px]'>
            <h3 className='text-title_xl_bold'>{testData.type.title}</h3>
            <span className='text-body_lg_bold text-main'>
              {testData.type.tag}
            </span>
          </div>
          <ul className='list-disc'>
            {testData.descriptions.map((item) => (
              <li className='text-body_md' key={item.id}>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='rounded-[12px] bg-white'>
        <div></div>
      </div>
    </div>
  );
}

export default TestResultPage;
