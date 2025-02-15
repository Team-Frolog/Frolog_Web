'use client';

import React, { useEffect, useState } from 'react';
import { CONS_TAG, PROS_TAG } from '@/constants/tags';
import { Tag as TagType } from '@/types/tag';
import { useTags } from '@/hooks/form/useTags';
import { motion, useAnimationControls } from 'framer-motion';
import { ExpandIcon } from 'public/icons';
import { useFormContext } from 'react-hook-form';
import Tag from './Tag';

interface Props {
  /** 장점(pros) or 단점(cons) */
  type: TagType;
}

const LIST_MIN_HEIGHT = '170px';

/** 리뷰 작성 시 장점 or 단점 태그 선택 리스트
 * @param type - 'pros' || 'cons'
 * - 주어진 타입에 맞는 태그 리스트를 렌더링합니다.
 * - expand 기능이 있습니다.
 * - react hook form이 적용되어 있으므로 반드시 FormProvider 내에서 사용되어야 합니다.
 */
function TagList({ type }: Props) {
  const { handleTagSelect, selectedTags } = useTags(type);
  const controls = useAnimationControls();
  const {
    getValues,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const [isExpanded, setIsExpanded] = useState<boolean>(
    getValues()[type].length // 리뷰 수정인 경우 (태그 데이터가 초기에 있는 경우) expanded 상태로 설정
  );
  const tagData = type === 'pros' ? PROS_TAG : CONS_TAG;

  /** expand 모션을 조절하는 useEffect
   * - isExpanded=true인 경우 태그 리스트 내 모든 태그를 렌더링하도록 height를 늘립니다.
   */
  useEffect(() => {
    if (isExpanded) {
      controls.start({ height: 'auto' });
    } else {
      controls.start({ height: LIST_MIN_HEIGHT });
    }
  }, [isExpanded, controls]);

  return (
    <div className='flex w-full flex-col gap-[8px]'>
      <span
        className={`text-body-md ${errors[type] ? 'text-error' : 'text-gray-700'}`}
      >
        {type === 'pros'
          ? '장점 키워드 (1~5개 고르세요)'
          : '단점 키워드 (선택)'}
      </span>
      <motion.div
        initial={{ height: isExpanded ? 'auto' : LIST_MIN_HEIGHT }}
        animate={controls}
        transition={{ duration: 0.3 }}
        className='relative flex w-[90%] flex-wrap gap-[16px] overflow-hidden mobile:w-full'
      >
        <div
          className={`absolute bottom-0 left-0 h-[60px] w-full transition-all duration-300 ${isExpanded ? '-z-10 opacity-100' : 'z-10 opacity-100'}`}
          style={{
            boxShadow: 'inset 0px -120px 60px -70px #ffffff',
          }}
        />
        {tagData.map((item) => (
          <Tag
            key={item.id}
            type={type}
            size='big'
            tagValue={item.value}
            onClick={() => {
              clearErrors(type);
              handleTagSelect(item.id);
            }}
            isSelected={selectedTags.includes(item.id)}
          />
        ))}
      </motion.div>
      <button
        type='button'
        className='flex w-full justify-center py-[12px]'
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <ExpandIcon
          className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
    </div>
  );
}

export default TagList;
