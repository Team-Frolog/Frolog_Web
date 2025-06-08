import BackDrop from '@/layouts/BackDrop';
import React, { useState } from 'react';
import FrogSelectSheet from './FrogSelectSheet';
import NewFrogCongrats from './NewFrogCongrats';

/** 최초 우물에서 개구리를 획득하는 프로세스를 진행하는 컴포넌트 */
function GettingNewFrog() {
  const [isAcquired, setIsAcquired] = useState(true); // 개구리 획득 완료 여부

  return (
    <BackDrop align={isAcquired ? 'center' : 'end'}>
      {isAcquired ? (
        <NewFrogCongrats
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
      ) : (
        <FrogSelectSheet />
      )}
    </BackDrop>
  );
}

export default GettingNewFrog;
