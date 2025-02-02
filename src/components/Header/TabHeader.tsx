'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import { GroupTab } from '@/constants/tabs';
import CustomLink from '../Link/CustomLink';
import HeaderWrapper from '../Wrapper/HeaderWrapper';

/** 메모, 리뷰 리스트의 탭 헤더
 * - 헤더 색상 전환 기능이 포함되어 있습니다.
 */

interface Props {
  tabs: GroupTab[];
  isResponsive?: boolean;
}

function TabHeader({ tabs, isResponsive = false }: Props) {
  const pathname = usePathname();

  return (
    <HeaderWrapper isResponsive={isResponsive}>
      <div className='relative w-fit pb-[5px]'>
        <div className='flex gap-[24px]'>
          {tabs.map((tab) => (
            <CustomLink
              key={tab.path}
              id={pathname.includes(tab.path) ? 'selected' : 'unselected'}
              replace
              href={`${pathname.replace(tabs[0].path, tab.path).replace(tabs[1].path, tab.path)}`}
              className='text-heading-md-bold'
              style={{
                color: pathname.includes(tab.path) ? '#FFFFFF' : '#b3b6c5',
              }}
            >
              {tab.label}
            </CustomLink>
          ))}
        </div>
        <div
          id='bar'
          className={`absolute bottom-0 h-[3px] w-[60px] bg-white transition-all ${pathname.includes(tabs[0].path) ? 'left-0' : 'left-[84px]'}`}
        />
      </div>
    </HeaderWrapper>
  );
}

export default TabHeader;
