'use client';

import React from 'react';

interface Props {
  /** 탭 데이터 */
  tabs: {
    id: number;
    label: string;
    name: string;
  }[];
  /** 현재 선택된 탭 */
  currentTab: string;
  /** 초기 선택 탭 */
  defaultTab: string;
  /** 탭 클릭 핸들러 */
  onChangeTab: (label: string) => void;
}

/** 도서 상세, 팔로우, 앱 설치방법 페이지에서 사용되는 탭 컴포넌트
 * - 외부에서 useState로 관리하는 탭 상태를 전달받아야 합니다.
 * - 탭 클릭 시 currentTab이 변경되면, 해당 탭 아래로 바가 이동합니다.
 */
function Tab({ tabs, currentTab, defaultTab, onChangeTab }: Props) {
  const getButtonClass = (isActive: boolean) =>
    `p-[16px] text-body-xl-bold ${isActive ? 'text-gray-900' : 'text-gray-500'}`;

  return (
    <div className='flex w-full flex-col bg-white'>
      <div className='grid w-full grid-cols-2 pb-[2px]'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type='button'
            onClick={() => onChangeTab(tab.label)}
            className={getButtonClass(currentTab === tab.label)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className='relative h-[2px] w-full bg-gray-500'>
        <div
          data-testid='tab-bar'
          className={`absolute bottom-0 h-full w-1/2 bg-gray-900 transition-all ${currentTab === defaultTab ? 'left-0' : 'left-1/2'}`}
        />
      </div>
    </div>
  );
}

export default Tab;
