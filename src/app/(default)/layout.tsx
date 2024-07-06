import React from 'react';

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return <div className='default-h-w'>{children}</div>;
}

export default DefaultLayout;
