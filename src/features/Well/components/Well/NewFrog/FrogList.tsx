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
        hasAcquireButton
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
        hasAcquireButton
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
        hasAcquireButton
        onClick={() => onAcquire?.('rogy')}
      />
    </div>
  );
}

export default FrogList;
