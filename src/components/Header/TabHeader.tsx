'use client';

import { usePathname } from 'next/navigation';
import React, { useCallback, useMemo } from 'react';
import { GroupTab } from '@/constants/tabs';
import CustomLink from '../Link/CustomLink';
import HeaderWrapper from '../Wrapper/HeaderWrapper';

/** 메모, 리뷰 리스트의 탭 헤더
 * - 헤더 색상 전환 기능이 포함되어 있습니다.
 */

interface Props {
  tabs: GroupTab[];
  theme?: 'dark' | 'light';
  isResponsive?: boolean;
}

function TabHeader({ tabs, theme = 'dark', isResponsive = false }: Props) {
  const pathname = usePathname();

  const isSelected = useCallback(
    (path: string) => {
      if (path === '/') {
        return pathname === path;
      }
      return pathname.includes(path);
    },
    [pathname]
  );

  const getBarPos = () => {
    if (tabs.some((tab) => tab.label.length > 2)) {
      return isSelected(tabs[0].path)
        ? 'left-0 w-[89px]'
        : 'left-[114px] w-[60px]';
    } else {
      return isSelected(tabs[0].path)
        ? 'left-0 w-[60px]'
        : 'left-[84px] w-[60px]';
    }
  };

  const [selected, unselected] = useMemo(
    () => (theme === 'dark' ? ['#FFFFFF', '#b3b6c5'] : ['#313239', '#B3B6C4']),
    [theme]
  );

  return (
    <HeaderWrapper isResponsive={isResponsive}>
      <div className='relative w-fit pb-[5px]'>
        <div className='flex gap-[24px]'>
          {tabs.map((tab) => (
            <CustomLink
              key={tab.path}
              id={isSelected(tab.path) ? 'selected' : 'unselected'}
              replace
              href={`${pathname.replace(tabs[0].path, tab.path).replace(tabs[1].path, tab.path)}`}
              className='text-heading-md-bold'
              style={{
                color: isSelected(tab.path) ? selected : unselected,
              }}
            >
              {tab.label}
            </CustomLink>
          ))}
        </div>
        <div
          id='bar'
          className={`absolute bottom-0 h-[3px] transition-all ${getBarPos()} ${theme === 'dark' ? 'bg-white' : 'bg-gray-800'}`}
        />
      </div>
    </HeaderWrapper>
  );
}

export default TabHeader;
