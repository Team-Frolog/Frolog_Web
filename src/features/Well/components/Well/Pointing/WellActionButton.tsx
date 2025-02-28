'use client';

import React from 'react';
import { ArrowIcon, PlusIcon } from 'public/icons';
import { motion } from 'framer-motion';
import { PAGES } from '@/constants/page';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import useAddBookStore from '@/store/addBookStore';
import Pointing from './Pointing';

interface Props {
  /** 아이콘 타입 */
  iconType?: 'arrow' | 'plus';
  /** 해당 우물 id */
  wellId?: string;
  /** 버튼 클릭 시 이동 경로 */
  href?: string;
  /** 클릭 유도 애니메이션 유무 */
  isPointing?: boolean;
  /** 버튼명 */
  btnName: string;
  /** 도서 개수 */
  itemCount?: number;
}

/** 우물 최상단에 있는 버튼 컴포넌트 */
function WellActionButton({
  btnName,
  wellId,
  itemCount,
  iconType = 'plus',
  href = PAGES.SEARCH,
  isPointing = false,
}: Props) {
  const { navigate } = useCustomRouter('well');
  const { setWellId } = useAddBookStore((state) => state.actions);

  return (
    <div className='flex-column items-center gap-[6px]'>
      <div className='relative h-[28px] w-[28px]'>
        <motion.button
          whileTap={{ scale: 1.1 }}
          type='button'
          onClick={() => {
            if (wellId) {
              setWellId(wellId);
            }
            navigate(href);
          }}
          className='absolute inset-x-0 top-0 z-50 mx-auto cursor-pointer'
        >
          {iconType === 'plus' ? (
            <PlusIcon />
          ) : (
            <ArrowIcon fill='#313239' width={28} height={28} />
          )}
        </motion.button>
        {isPointing && <Pointing />}
      </div>
      <h3 className='mt-[2px] text-body-xl-bold'>{btnName}</h3>
      {itemCount !== undefined && (
        <span className='text-body-md text-gray-600'>
          현재 높이 {itemCount}권
        </span>
      )}
    </div>
  );
}

export default WellActionButton;
