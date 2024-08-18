import React from 'react';
import ColorSelector from './ColorSelector';
import ShapeSelector from './ShapeSelector';

function ShapeForm() {
  return (
    <div className='flex w-full flex-col gap-[12px]'>
      <h6 className='text-body_md text-gray-700'>우물 모양</h6>
      <ColorSelector />
      <ShapeSelector />
    </div>
  );
}

export default ShapeForm;
