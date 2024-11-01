import React from 'react';
import { ProfileEditForm } from '@/features/Profile';

interface Props {
  params: {
    userId: string;
  };
}

function ProfileEditPage({ params: { userId } }: Props) {
  return <ProfileEditForm userId={userId} />;
}

export default ProfileEditPage;
