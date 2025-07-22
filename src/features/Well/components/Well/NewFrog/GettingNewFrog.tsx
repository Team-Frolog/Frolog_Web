'use client';

import BackDrop from '@/layouts/BackDrop';
import React, { useState } from 'react';
import FrogSelectSheet from './FrogSelectSheet';
import NewFrogCongrats from './NewFrogCongrats';
import GuideSheet from './GuideSheet';
import { useMutation } from '@tanstack/react-query';
import { getFirstFrog } from '@/features/Well/api/frog.api';
import { useSession } from 'next-auth/react';
import { STORAGE_KEY } from '@/constants/storage';

interface Props {
  onClose: () => void;
}

/** 최초 우물에서 개구리를 획득하는 프로세스를 진행하는 컴포넌트 */
function GettingNewFrog({ onClose }: Props) {
  const { data: session } = useSession();
  const [ownedFrog, setOwnedFrog] = useState<string>('');
  const [isAcquired, setIsAcquired] = useState(false);
  const [isOpenGuideSheet, setIsOpenGuideSheet] = useState(false);

  const { mutate: handleAcquireFrog } = useMutation({
    mutationFn: (key: string) => getFirstFrog(key, session?.user.id),
    onSuccess: (_, key) => {
      setIsAcquired(true);
      setOwnedFrog(key);
    },
  });

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY.gotFirstFrog, 'true');
    onClose();
  };

  return (
    <BackDrop align={isAcquired && !isOpenGuideSheet ? 'center' : 'end'}>
      {!isAcquired && (
        <FrogSelectSheet onAcquire={(key) => handleAcquireFrog(key)} />
      )}
      {isAcquired && !isOpenGuideSheet && (
        <NewFrogCongrats
          onNext={() => setIsOpenGuideSheet(true)}
          acquiredFrog={{
            key: ownedFrog,
            type: 'frog',
            name: '개꾸리',
            price: 100,
            disabled: false,
            is_available: true,
            is_owned: true,
          }}
        />
      )}
      {isOpenGuideSheet && (
        <GuideSheet ownedFrog={ownedFrog} onClose={handleClose} />
      )}
    </BackDrop>
  );
}

export default GettingNewFrog;
