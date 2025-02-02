import ResponsiveHeaderLayout from '@/layouts/ResponsiveHeaderLayout';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
  children: React.ReactNode;
  isResponsive: boolean;
}

function HeaderWrapper({ children, isResponsive }: Props) {
  const router = useRouter();

  return isResponsive ? (
    <ResponsiveHeaderLayout display='block' onClick={() => router.back()}>
      {children}
    </ResponsiveHeaderLayout>
  ) : (
    <div>{children}</div>
  );
}

export default HeaderWrapper;
