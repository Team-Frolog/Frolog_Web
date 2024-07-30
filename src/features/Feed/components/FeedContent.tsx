import TagSlider from '@/components/Tag/TagSlider';
import React from 'react';

function FeedContent() {
  const pros = ['easy', 'organized', 'tears', 'warm'];
  const cons = ['biased', 'no_evidence', 'background', 'issuing'];
  return (
    <div className='flex flex-col gap-[20px]'>
      <div className='flex flex-col gap-[12px]'>
        <h3 className='break-all px-page text-title_xl_bold'>리뷰 타이틀</h3>
        <div className='flex-col-center w-full gap-[8px]'>
          <TagSlider type='pros' tagKeys={pros} />
          <TagSlider type='cons' tagKeys={cons} />
        </div>
      </div>
      <span className='px-page text-body_md text-gray-600'>2024.07.30</span>
    </div>
  );
}

export default FeedContent;
