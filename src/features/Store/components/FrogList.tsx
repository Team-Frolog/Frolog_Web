'use client';

import React from 'react';
import FrogCharacter from '@/components/Frog/FrogCharacter';
import { FROGS } from '@/constants/frogs';
import { useFrogs } from '@/features/Well/hooks/useFrogs';

interface Props {
  userId: string;
}

function FrogList({ userId }: Props) {
  const { frogs } = useFrogs(userId);
  const existFrogs = frogs?.map((frog) => frog.id);

  return (
    <div className='flex w-full flex-col gap-[12px]'>
      <h6 className='text-body-md text-gray-700'>캐릭터</h6>
      <div className='relative flex flex-wrap gap-[9px] overflow-hidden mobile:grid mobile:grid-cols-3'>
        {Object.keys(FROGS).map(
          (frog) =>
            FROGS[frog].price && (
              <FrogCharacter
                key={frog}
                data={{ id: frog }}
                isSelected={false}
                onClick={() => {}}
                isExist={existFrogs?.includes(frog)}
              />
            )
        )}
      </div>
    </div>
  );
}

export default FrogList;
