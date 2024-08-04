'use client';

import React, { useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ToggleIcon } from 'public/icons';
import { CATEGORY } from '@/constants/category';
import { useClickOutside } from '@/hooks/popup/useClickOutside';
import CategoryItem from '../CategoryItem';

interface Props {
  categoryData: {
    category: string;
    count: number;
  }[];
}

function Dropdown({ categoryData }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setSelected] = useState<string | null>(null);

  useClickOutside(ref, () => setIsOpen(false));

  const handleClickItem = (id: string) => {
    if (isSelected === id) {
      setSelected(null);
      router.replace(`${pathname}?query=${searchParams.get('query')}`);
    } else {
      setSelected(id);
      const params = new URLSearchParams(searchParams.toString());
      params.set('category', id);
      router.replace(`${pathname}?${params}`);
    }

    setIsOpen(false);
  };

  const getClass = () => {
    if (isSelected) {
      return `bg-category-bg-${isSelected} text-category-text-${isSelected} text-body_lg_bold`;
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
            ? `${CATEGORY[isSelected].name} (${categoryData.find((d) => d.category === isSelected)?.count})`
            : '도서 카테고리 분류'}
        </span>
        <ToggleIcon
          fill={isSelected ? CATEGORY[isSelected].text : '#B3B6C5'}
          className={`transition-all duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'fit-content', maxHeight: '300px', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ ease: 'linear', duration: 0.2 }}
            className='absolute left-0 top-[65px] z-40 h-fit max-h-[300px] w-full overflow-auto rounded-[12px] border border-gray-400 bg-white py-[12px]'
          >
            {categoryData.length === 0 ? (
              <div className='flex w-full items-center px-[16px] py-[12px]'>
                분류할 도서가 없습니다.
              </div>
            ) : (
              categoryData.map((item) => (
                <CategoryItem
                  key={item.category}
                  categoryData={item}
                  isSelected={isSelected === item.category}
                  onClick={() => handleClickItem(item.category)}
                />
              ))
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dropdown;
