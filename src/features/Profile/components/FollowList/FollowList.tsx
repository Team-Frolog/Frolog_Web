'use client';

import Tap from '@/components/Tap/Tap';
import React, { useState } from 'react';

function FollowList() {
  const [followType, setFollowType] = useState(1);

  return (
    <div className='flex w-full flex-col py-[16px]'>
      <Tap
        taps={[
          { id: 1, name: '팔로워' },
          { id: 2, name: '팔로잉' },
        ]}
        currentTap={followType}
        setCurrentTap={setFollowType}
      />
    </div>
  );
}

export default FollowList;
