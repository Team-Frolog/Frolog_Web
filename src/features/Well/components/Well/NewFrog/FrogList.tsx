import FrologItem from '@/components/FrologItem/FrologItem';
import React from 'react';

interface Props {
  ownedFrog?: string;
  onAcquire?: (key: string) => void;
}

function FrogList({ ownedFrog, onAcquire }: Props) {
  return (
    <div className='flex gap-[9px]'>
      <FrologItem
        type='well'
        item={{
          key: 'fro',
          type: 'frog',
          name: '프로',
          price: 0,
          disabled: false,
          is_available: true,
          is_owned: ownedFrog === 'fro',
        }}
        hasAcquireButton={!ownedFrog || ownedFrog !== 'fro'}
        isDisabledAcquireButton={Boolean(ownedFrog && ownedFrog !== 'fro')}
        onClick={() => onAcquire?.('fro')}
      />
      <FrologItem
        type='well'
        item={{
          key: 'roro',
          type: 'frog',
          name: '로로',
          price: 0,
          disabled: false,
          is_available: true,
          is_owned: ownedFrog === 'roro',
        }}
        hasAcquireButton={!ownedFrog || ownedFrog !== 'roro'}
        isDisabledAcquireButton={Boolean(ownedFrog && ownedFrog !== 'roro')}
        onClick={() => onAcquire?.('roro')}
      />
      <FrologItem
        type='well'
        item={{
          key: 'rogy',
          type: 'frog',
          name: '로기',
          price: 0,
          disabled: false,
          is_available: true,
          is_owned: ownedFrog === 'rogy',
        }}
        hasAcquireButton={!ownedFrog || ownedFrog !== 'rogy'}
        isDisabledAcquireButton={Boolean(ownedFrog && ownedFrog !== 'rogy')}
        onClick={() => onAcquire?.('rogy')}
      />
    </div>
  );
}

export default FrogList;
