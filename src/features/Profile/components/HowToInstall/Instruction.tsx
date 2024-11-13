import React from 'react';
import { Instruction as InstructionType } from '../../data/howToInstall';

interface Props {
  data: InstructionType[];
}

function Instruction({ data }: Props) {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className='flex w-full flex-col gap-[12px]'>
          <div className='flex gap-[12px]'>
            <div className='h-[24px] w-[24px] rounded-[50%] bg-main text-center text-body-lg-bold text-white'>
              {item.id}
            </div>
            <span
              className={
                item.theme === 'default'
                  ? 'text-body-lg text-gray-800'
                  : 'text-body-lg-bold text-main'
              }
            >
              {item.title}
            </span>
          </div>
          {item.img}
        </div>
      ))}
    </>
  );
}

export default Instruction;
