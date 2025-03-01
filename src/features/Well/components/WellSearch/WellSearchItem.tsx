'use client';

import React from 'react';
import ProfileHeader from '@/components/Header/ProfileHeader/ProfileHeader';
import Slider from '@/components/Slider/Slider';
import WellIcon from '@/features/Well/components/WellList/WellIcon/WellIcon';
import { GetWellRes } from '@frolog/frolog-api';
import { useSearchParams } from 'next/navigation';

interface Props {
  userId: string;
  wells: GetWellRes[];
  onSaveScroll: () => void;
}

/** 우물 탐색/검색 아이템 컴포넌트 */
function WellSearchItem({ userId, wells, onSaveScroll }: Props) {
  const searchValue = useSearchParams().get('query') || null;

  // 우물 검색 키워드 강조 함수
  const highlightName = (name: string) => {
    if (searchValue === null) return name;

    const regex = new RegExp(`(${searchValue})`, 'gi');
    const parts = name.split(regex);

    const converted = parts.map((item, index) =>
      item.toLowerCase() === searchValue.toLowerCase() ? (
        <span key={item + index} className='text-main'>
          {item}
        </span>
      ) : (
        <>{item}</>
      )
    );

    return converted;
  };

  return (
    <div className='flex w-full flex-col' onClick={onSaveScroll}>
      <ProfileHeader type='feed' hasFollow userId={userId} />{' '}
      <div className='pt-[30px]'>
        <div className='relative flex w-full rounded-[20px] bg-white py-[24px]'>
          <div className='tooltip-feed border-b-white' />
          <Slider slideClass='gap-[12px] px-[24px]'>
            {wells.map((well) => {
              const convertedName = highlightName(well.name);
              return (
                <WellIcon
                  key={well.id}
                  wellData={well}
                  highlightedName={convertedName}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default WellSearchItem;
