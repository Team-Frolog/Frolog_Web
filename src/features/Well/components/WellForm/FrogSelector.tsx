import React from 'react';
import { useFormContext } from 'react-hook-form';
import FrogCharacter from './FrogCharacter';

function FrogSelector() {
  const { watch, setValue } = useFormContext();

  const dummy = [
    { id: 1, name: '개구리 1', isNew: true },
    { id: 2, name: '개구리 2', isNew: false },
    { id: 3, name: '개구리 3', isNew: false },
    { id: 4, name: '개구리 4', isNew: false },
    { id: 5, name: '개구리 5', isNew: false },
    { id: 6, name: '개구리 6', isNew: false },
  ];

  return (
    <div className='flex w-full flex-col gap-[12px]'>
      <h6 className='text-body_md text-gray-700'>내 캐릭터</h6>
      <div className='flex flex-wrap gap-[9px]'>
        {dummy.map((item) => (
          <FrogCharacter
            key={item.id}
            data={item}
            isSelected={item.id === watch('frogId')}
            onClick={() => setValue('frogId', item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default FrogSelector;
