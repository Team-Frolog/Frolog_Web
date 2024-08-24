import React from 'react';
import WellAddButton from './WellAddButton';
import Well from '../WellItem/Well';

function WellList() {
  return (
    <div className='relative flex w-full flex-col py-[30px] text-gray-800'>
      <div className='flex w-full px-page py-[20px]'>
        <h1 className='text-h_md_bold'>우물</h1>
      </div>
      <div className='grid grid-cols-2 gap-[24px] px-page py-[12px]'>
        <WellAddButton />
        <Well
          wellData={{
            id: 'well1',
            title: '시간 순삭 소설 우물',
            category: 'novel',
          }}
        />
        <Well
          wellData={{
            id: 'well1',
            title: '시간 순삭 소설 우물',
            category: 'novel',
          }}
        />
        <Well
          wellData={{
            id: 'well1',
            title: '시간 순삭 소설 우물',
            category: 'novel',
          }}
        />
        <Well
          wellData={{
            id: 'well1',
            title: '시간 순삭 소설 우물',
            category: 'it',
          }}
        />
        <Well
          wellData={{
            id: 'well1',
            title: '시간 순삭 소설 우물',
            category: 'novel',
          }}
        />
        <Well
          wellData={{
            id: 'well1',
            title: '시간 순삭 소설 우물',
            category: 'novel',
          }}
        />
        <Well
          wellData={{
            id: 'well1',
            title: '시간 순삭 소설 우물',
            category: 'novel',
          }}
        />
      </div>
    </div>
  );
}

export default WellList;
