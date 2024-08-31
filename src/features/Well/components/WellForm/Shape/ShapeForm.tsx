import React from 'react';
import ColorSelector from './ColorSelector';
import ShapeSelector from './ShapeSelector';

function ShapeForm() {
  return (
    <div className='flex w-full flex-col gap-[12px]'>
      <h6 className='text-body-md text-gray-700'>우물 모양</h6>
      <div className='flex w-full flex-col rounded-[12px] border border-gray-300'>
        <ColorSelector />
        <ShapeSelector />
      </div>
    </div>
  );
}

export default ShapeForm;
