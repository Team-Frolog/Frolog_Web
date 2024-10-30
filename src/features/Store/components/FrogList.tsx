'use client';

import React from 'react';
import FrogCharacter from '@/components/Frog/FrogCharacter';
import { FROGS } from '@/constants/frogs';

function FrogList() {
  return (
    <div className='flex w-full flex-col gap-[12px]'>
      <h6 className='text-body-md text-gray-700'>캐릭터</h6>
      <div className='relative flex flex-wrap gap-[9px] overflow-hidden mobile:grid mobile:grid-cols-3'>
        {Object.keys(FROGS).map((frog) => (
          <FrogCharacter
            key={frog}
            data={{ id: frog }}
            isSelected={false}
            onClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
}

export default FrogList;
