import React from 'react';

interface Props {
  children: React.ReactNode;
  isCenter?: boolean;
  extraClass?: string;
}

const MainLayout = React.forwardRef<HTMLElement, Props>(
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
