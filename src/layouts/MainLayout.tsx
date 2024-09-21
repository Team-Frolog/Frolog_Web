import React from 'react';

interface Props {
  children: React.ReactNode;
  isCenter?: boolean;
  extraClass?: string;
}

function MainLayout({ children, isCenter = true, extraClass }: Props) {
  return (
    <main
      id='main'
      className={`flex w-full flex-1 flex-col scrollbar-hide ${isCenter ? 'items-center' : 'items-start'} overflow-auto ${extraClass}`}
    >
      {children}
    </main>
  );
}

export default MainLayout;
