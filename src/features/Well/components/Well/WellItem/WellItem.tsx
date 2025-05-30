/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useUserId } from '@/store/sessionStore';
import { AnimatePresence, motion } from 'framer-motion';
import useNewItemStore from '@/store/newItemStore';
import { staggerItemVariants } from '@/styles/variants/variants';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { STORAGE_KEY } from '@/constants/storage';
import { GetWellItemRes } from '@frolog/frolog-api';
import { CATEGORY } from '@/constants/category';
import WellBubble from 'public/images/well/well-bubble.svg';
import BottomSheet from '@/modules/BottomSheet/BottomSheet';
import { getPath } from '@/utils/getPath';
import MemoLeaf from './MemoLeaf';

interface Props {
  /** 도서 데이터 객체 */
  wellBook: GetWellItemRes;
  /** 우물 id */
  wellId: string;
  /** 최상단 아이템인지 여부 */
  isTopItem: boolean;
  /** 아이템의 z-index */
  zIndex: number;
  /** 로딩 시작 핸들러 */
  startLoading: () => void;
  /** 최하단 아이템인지 여부 */
  isLastItem?: boolean;
  /** 무한스크롤을 위한 observer 타겟 세팅 핸들러 */
  setTarget?: React.Dispatch<
    React.SetStateAction<HTMLDivElement | null | undefined>
  >;
}

/** 우물 도서 아이템 컴포넌트 */
function WellItem({
  wellId,
  wellBook,
  isTopItem,
  zIndex,
  isLastItem,
  setTarget,
  startLoading,
}: Props) {
  const userId = useUserId();
  const { navigate } = useCustomRouter('well');
  const { newItemId, setNewItemId } = useNewItemStore();
  const { id, status, title, page, category, isbn, memo_cnt } = wellBook;
  const [isFirstMemo, setIsFirstMemo] = useState(false);
  const height = page > 400 ? page * 0.15 : 55;
  const isReading = status === 'reading';
  const hasMemo = memo_cnt > 0;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (newItemId === id && memo_cnt === 0) {
      timeoutId = setTimeout(() => {
        setIsFirstMemo(true);
      }, 2000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      if (newItemId === id) {
        setNewItemId(null);
      }
    };
  }, []);

  return (
    <div className='relative flex w-full'>
      <motion.div
        whileTap={{ y: -10 }}
        onClick={() => {
          startLoading();
          sessionStorage.setItem(STORAGE_KEY.selectedWellItemId, id);
          navigate(
            isReading
              ? `${wellId}/book/${isbn}/memo`
              : `${wellId}/book/${isbn}/review`
          );
        }}
        variants={
          newItemId === id && isTopItem ? staggerItemVariants : undefined
        }
        style={{ zIndex, height }}
        className={`flex h-fit w-full bg-category-bg-${category} relative z-auto box-border justify-center pt-[12px]`}
      >
        {isLastItem && (
          <div
            ref={setTarget}
            id='observer'
            className='absolute -top-[10px] h-[10px] w-full'
          />
        )}
        <Image
          src={CATEGORY[category].wave}
          alt='wave'
          width={392}
          height={12}
          className='absolute -left-[0px] -top-[12px] h-[12px] w-full'
          loading='eager'
        />
        {isReading && (
          <WellBubble
            fill={CATEGORY[category].band}
            className='absolute left-[24px] top-[8px]'
          />
        )}
        {hasMemo && (
          <MemoLeaf bg={CATEGORY[category].text} line={CATEGORY[category].bg} />
        )}
        <span
          className={`text-category-text-${category} truncate text-center text-body-sm-bold ${isReading || hasMemo ? 'w-[65%]' : 'w-[90%]'}`}
        >
          {title}
        </span>
      </motion.div>
      <div
        className={`absolute h-[20px] w-full bg-category-bg-${category} bottom-0 left-0 z-0`}
      />
      <AnimatePresence>
        {isFirstMemo && (
          <BottomSheet
            sheetKey='first_memo'
            onClick={() =>
              navigate(getPath.newFirstMemo(userId!, wellId, isbn))
            }
            onClose={() => setIsFirstMemo(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default WellItem;
