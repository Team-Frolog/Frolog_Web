import React from 'react';
import Outline1 from 'public/images/well/outline/1.svg';
import Outline2 from 'public/images/well/outline/2.svg';
import Outline3 from 'public/images/well/outline/3.svg';
import Outline4 from 'public/images/well/outline/4.svg';
import Outline5 from 'public/images/well/outline/5.svg';
import Outline6 from 'public/images/well/outline/6.svg';
import Outline7 from 'public/images/well/outline/7.svg';
import Outline8 from 'public/images/well/outline/8.svg';
import Outline9 from 'public/images/well/outline/9.svg';
import { useFormContext } from 'react-hook-form';
import { CATEGORY } from '@/constants/category';

const outlines = [
  { id: 1, Shape: Outline1 },
  { id: 2, Shape: Outline2 },
  { id: 3, Shape: Outline3 },
  { id: 4, Shape: Outline4 },
  { id: 5, Shape: Outline5 },
  { id: 6, Shape: Outline6 },
  { id: 7, Shape: Outline7 },
  { id: 8, Shape: Outline8 },
  { id: 9, Shape: Outline9 },
];

function ShapeSelector() {
  const { watch, setValue } = useFormContext();

  return (
    <div className='grid grid-cols-3 gap-[20px] px-[16px] py-[18px]'>
      {outlines.map(({ id, Shape }) => (
        <button
          type='button'
          key={id}
          className='w-full'
          onClick={() => setValue('shape', id, { shouldDirty: true })}
        >
          <Shape
            fill={
              watch('shape') === id ? CATEGORY[watch('color')].bg : '#B3B6C4'
            }
          />
        </button>
      ))}
    </div>
  );
}

export default ShapeSelector;
