'use client';

import BackDrop from '@/layouts/BackDrop';
import React, { useState } from 'react';
import FrogSelectSheet from './FrogSelectSheet';
import NewFrogCongrats from './NewFrogCongrats';
import GuideSheet from './GuideSheet';

/** 최초 우물에서 개구리를 획득하는 프로세스를 진행하는 컴포넌트 */
function GettingNewFrog() {
  const [isAcquired, setIsAcquired] = useState(false); // 개구리 획득 완료 여부
  const [isOpenGuideSheet, setIsOpenGuideSheet] = useState(false);

  return (
    <BackDrop align={isAcquired && !isOpenGuideSheet ? 'center' : 'end'}>
      {!isAcquired && <FrogSelectSheet onAcquire={() => setIsAcquired(true)} />}
      {isAcquired && !isOpenGuideSheet && (
        <NewFrogCongrats
          onNext={() => setIsOpenGuideSheet(true)}
          acquiredFrog={{
            key: 'default',
            type: 'frog',
            name: '개꾸리',
            price: 100,
            disabled: false,
            is_available: true,
            is_owned: true,
          }}
        />
      )}
      {isOpenGuideSheet && <GuideSheet />}
    </BackDrop>
  );
}

export default GettingNewFrog;
