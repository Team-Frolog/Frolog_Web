import TagSlider from '@/components/Tag/TagSlider';
import React from 'react';

function FeedContent() {
  const pros = ['easy', 'organized', 'tears', 'warm'];
  const cons = ['biased', 'no_evidence', 'background', 'issuing'];
  return (
    <div className='flex flex-col gap-[20px] bg-white py-[20px]'>
      <div className='flex-col-center w-full gap-[8px]'>
        <TagSlider type='pros' tagKeys={pros} />
        <TagSlider type='cons' tagKeys={cons} />
      </div>
      <div className='flex flex-col gap-[12px] px-page'>
        <h3 className='break-all text-title-xl-bold'>리뷰 타이틀</h3>
        <p className='break-all text-body-lg'>컨텐츠</p>
      </div>
      <span className='px-page text-body-md text-gray-600'>2024.07.30</span>
    </div>
  );
}

export default FeedContent;
