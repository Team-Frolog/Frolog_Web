'use client';

import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ToggleIcon from 'public/icons/common/toggle.svg';
import { CATEGORY } from '@/constants/category';
import { useClickOutside } from '@/hooks/popup/useClickOutside';
import CategoryItem from '../CategoryItem';

function Dropdown() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setSelected] = useState<string | null>(null);

  useClickOutside(ref, () => setIsOpen(false));

  const data = [
    { category: 'novel', count: 12 },
    { category: 'travel', count: 8 },
    { category: 'it', count: 4 },
    { category: 'art', count: 2 },
  ];

  const handleClickItem = (id: string) => {
    setSelected(id);
    setIsOpen(false);
  };

  const getClass = () => {
    if (isSelected) {
      return `bg-category-bg-${isSelected} text-white text-body_lg_bold`;
    }
    if (isOpen)
      return 'border-gray-900 bg-gray-900 text-body_lg_bold text-white';
    return 'border-gray-400 bg-white text-body_lg text-gray-800';
  };

  return (
    <div ref={ref} className='relative w-full'>
      <motion.button
        type='button'
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0 }}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`box-border flex w-full rounded-[12px] border px-[16px] py-[18px] transition-all ${getClass()}`}
      >
        <span className='flex-1 text-start'>
          {isSelected
            ? `${CATEGORY[isSelected].name} (${data.find((d) => d.category === isSelected)?.count})`
            : '도서 카테고리 분류'}
        </span>
        <ToggleIcon
          fill={isSelected ? '#FFFFFF' : '#B3B6C5'}
          className={`transition-all duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'fit-content', maxHeight: '300px', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className='absolute left-0 top-[65px] z-40 h-fit max-h-[300px] w-full overflow-auto rounded-[12px] border border-gray-400 bg-white py-[12px]'
          >
            {data.map((item) => (
              <CategoryItem
                key={item.category}
                categoryData={item}
                onClick={() => handleClickItem(item.category)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dropdown;
