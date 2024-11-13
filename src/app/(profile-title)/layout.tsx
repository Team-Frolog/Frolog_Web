import React from 'react';
import ProfileTitleHeader from '@/components/Header/ProfileTitleHeader';

function ProfileTitleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProfileTitleHeader />
      {children}
    </>
  );
}

export default ProfileTitleLayout;
