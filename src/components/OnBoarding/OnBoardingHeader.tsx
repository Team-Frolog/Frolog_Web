import React from 'react';

function OnBoardingHeader() {
  return (
    <div className='flex w-full flex-col gap-[20px] bg-gray-900 px-page py-page pb-0'>
      <div className='flex gap-[8px]'>
        <button
          type='button'
          className='h-[8px] w-[8px] rounded-[50%] border-[1.2px] border-gray-600'
        />
        <button
          type='button'
          className='h-[8px] w-[8px] rounded-[50%] border-[1.2px] border-gray-600'
        />
        <button
          type='button'
          className='h-[8px] w-[8px] rounded-[50%] bg-main'
        />
        <button
          type='button'
          className='h-[8px] w-[8px] rounded-[50%] border-[1.2px] border-gray-600'
        />
      </div>
      <h2 className='text-heading-md-bold text-main_hightlight'>
        우물에 책을 쌓아
        <br />
        탈출하세요!
      </h2>
      {/* <div
        className='absolute left-0 top-0 h-full w-full'
        style={{
          background:
            'linear-gradient(-35deg, rgba(0, 0, 0, 0) 60%, #0E0E0E 60%)',
        }}
      /> */}
    </div>
  );
}

export default OnBoardingHeader;
