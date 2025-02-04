import React from 'react';
import WellSearchItem from './WellSearchItem';

function WellSearchResult() {
  return (
    <div className='flex w-full flex-col gap-[36px]'>
      <WellSearchItem />
      <WellSearchItem />
      <WellSearchItem />
    </div>
  );
}

export default WellSearchResult;
