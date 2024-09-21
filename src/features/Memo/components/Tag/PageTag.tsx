import React from 'react';

interface Props {
  pageNum: number;
}

function PageTag({ pageNum }: Props) {
  return (
    <div className='text-body-md-bold w-fit rounded-[15px] border border-gray-500 bg-white px-[14px] py-[5px] text-gray-700'>
      P.{pageNum}
    </div>
  );
}

export default PageTag;
