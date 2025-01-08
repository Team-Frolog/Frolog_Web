import React, { forwardRef } from 'react';

interface Props {
  children: React.ReactNode;
  isCenter?: boolean;
  extraClass?: string;
}

/** 메인 레이아웃 컴포넌트
 * @param isCenter - align-items='center'의 여부. 기본값은 true (optional)
 * @param extraClass - main 태그에 적용할 추가 클래스 (optional)
 * - 가장 주된 레이아웃으로 활용됩니다.
 * - flex, overflow가 적용되어 있습니다.
 */
const MainLayout = forwardRef<HTMLElement, Props>(
  ({ children, isCenter = true, extraClass }, ref) => (
    <main
      id='main'
      ref={ref}
      className={`flex w-full flex-1 flex-col scrollbar-hide ${isCenter ? 'items-center' : 'items-start'} overflow-auto ${extraClass}`}
    >
      {children}
    </main>
  )
);

export default MainLayout;
