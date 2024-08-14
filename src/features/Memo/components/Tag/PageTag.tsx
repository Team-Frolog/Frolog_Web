import React from 'react';

interface Props {
  pageNum: number;
}

function PageTag({ pageNum }: Props) {
  return (
    <div className='w-fit rounded-[15px] border border-gray-500 bg-white px-[14px] py-[5px] text-body_md_bold text-gray-700'>
      P.{pageNum}
    </div>
  );
}

export default PageTag;
