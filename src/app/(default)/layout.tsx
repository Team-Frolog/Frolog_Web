import React from 'react';

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return <div className='min-h-dvh w-screen'>{children}</div>;
}

export default DefaultLayout;
